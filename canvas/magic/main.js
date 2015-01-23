window.addEventListener("load", function() {
	var magics = [
		{
			create: function(size) {
				return new Magic(size || 2);
			},
			animation: Magic.prototype.solve,
			text: "Rubik's Magic",
			value: "magic"
		},
		{
			create: function(size) {
				return new Magic(size || 2);
			},
			animation: Magic.prototype.solveBeginner,
			text: "Rubik's Magic for beginner",
			value: "magic-beginner"
		},
		{
			create: function(size) {
				return new Magic(size || 2);
			},
			animation: Magic.prototype.toCube,
			text: "Rubik's Magic to cube",
			value: "magic2cube",
			init_display: true
		},
		{
			create: function(size) {
				return new MasterMagic(size || 2);
			},
			animation: MasterMagic.prototype.solve,
			text: "Master Magic",
			value: "master-magic"
		},
		{
			create: function(size) {
				return new MasterMagic(size || 2);
			},
			animation: MasterMagic.prototype.solveBeginner,
			text: "Master Magic for beginner",
			value: "master-magic-beginner"
		}
	];

	var $ = function(selector, element) {
		return (element || document).querySelector(selector);
	};

	var $$ = function(selector, element) {
		return (element || document).querySelectorAll(selector);
	};

	var canvas = $("#magic");
	var resize = function() {
		canvas.width = document.documentElement.clientWidth;
		canvas.height = document.documentElement.clientHeight;
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	};
	this.addEventListener("resize", resize, false);

	var context = canvas.getContext("2d");
	var inspector = new Inspector(new Vertex(8, 0, 6), new Vertex(), new Vertex(0, 0, 1));
	var get_stroke_width = function() {
		return 2 / Math.min(canvas.width, canvas.height);
	};
	var clear_screen = function() {
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		var scale = Math.min(canvas.width, canvas.height) / 2;
		context.setTransform(scale, 0, 0, -scale, canvas.width / 2, canvas.height / 2);
	};

	var play_button = $("#play");
	var stopped = false;
	var paused = false;

	var animation = {};
	magics.forEach(function(magic) {
		animation[magic.value] = function() {
			var animation = magic.animation.call(magic.create(), context, function() {
				return inspector;
			}, get_stroke_width, clear_screen);
			animation.push(function() {
				stopped = true;
				paused = false;
				play_button.setAttribute("disabled", "disabled");
			}, 1, 0);
			return animation;
		};
	});

	var select = $("#select");
	magics.forEach(function(magic) {
		select.options.add(new Option(magic.text, magic.value));
		if (magic.init_display === true) {
			select.value = magic.value;
		}
	});
	var current_animation = animation[select.value]();
	resize();
	current_animation.animate();

	(function() {
		var change = function() {
			current_animation.stop();
			current_animation = animation[select.value]();
			current_animation.animate();
			stopped = false;
			paused = false;
			play_button.innerHTML = "Pause";
			play_button.removeAttribute("disabled");
		};

		var pause = function() {
			if (!stopped) {
				if (paused) {
					current_animation.play();
					paused = false;
					play_button.innerHTML = "Pause";
				} else {
					current_animation.stop();
					paused = true;
					play_button.innerHTML = "Play";
				}
			}
		};

		var doubletap = function() {
			var tap_count = 0;
			var tap_start = null;
			var evt = new UIEvent("doubletap");
			this.addEventListener("touchstart", function(event) {
				if (event.targetTouches.length == 1) {
					var time = Date.now();
					if (!tap_start || time - tap_start >= 200) {
						tap_count = 0;
					}
					tap_start = time;
				} else {
					tap_start = null;
				}
			}, false);
			this.addEventListener("touchend", function() {
				if (event.targetTouches.length == 0) {
					var time = Date.now();
					if (tap_start && time - tap_start < 150) {
						if (++tap_count != 2) {
							tap_start = time;
							return;
						}
						this.dispatchEvent(evt);
						tap_count = 0;
					}
				}
				tap_start = null;
			}, false);
		};
		doubletap.call(canvas);

		select.addEventListener("change", change, false);
		$("#replay").addEventListener("click", change, false);
		play_button.addEventListener("click", pause, false);
		canvas.addEventListener("dblclick", pause, false);
		canvas.addEventListener("doubletap", pause, false);
	})();

	$("#reset-view").addEventListener("click", function() {
		inspector = new Inspector(new Vertex(8, 0, 6), new Vertex(), new Vertex(0, 0, 1));
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	}, false);

	var inspector_rotate = function(x, y) {
		if (x == 0 && y == 0) {
			return;
		}
		var angle = Math.sqrt(x * x + y * y) / Math.min(canvas.width, canvas.height) * Math.PI;
		var axis = Vertex.linear_combination([inspector.axis_y, -x], [inspector.axis_x, -y]);
		inspector.rotate(axis, angle);
	};

	var distance = function(p1, p2) {
		return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
	};
	var area = function(point) {
		var sum = point[point.length - 1].x * point[0].y - point[0].x * point[point.length - 1].y;
		for (var i = 1; i < point.length; ++i) {
			sum += point[i - 1].x * point[i].y - point[i].x * point[i - 1].y;
		}
		return Math.abs(sum) / 2;
	};
	var convex_hull = function(point) {
		var cross = function(p1, p2, p3, p4) {
			return (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
		};
		point = point.slice();
		var id = 0;
		var pole = point[0];
		for (var i = 0; i < point.length; ++i) {
			if (point[i].y < pole.y || (point[i].y == pole.y && point[i].x < pole.x)) {
				pole = point[i];
				id = i;
			}
		}
		point[id] = point[0];
		point.shift();
		point.sort(function(p1, p2) {
			var c = cross(pole, p1, pole, p2);
			if (c == 0) {
				return distance(pole, p1) - distance(pole, p2);
			} else {
				return -c;
			}
		});
		var hull = [pole, point[0]];
		var top = 1;
		for (var i = 1; i < point.length; ++i) {
			while (top && cross(hull[top - 1], hull[top], hull[top], point[i]) <= 0) {
				--top;
			}
			hull[++top] = point[i];
		}
		return hull.slice(0, top + 1);
	};

	(function() {
		mouse = null;
		canvas.addEventListener("mousedown", function(event) {
			mouse = {x: event.clientX, y: event.clientY};
		}, false);
		canvas.addEventListener("mouseup", function() {
			mouse = null;
		}, false);
		canvas.addEventListener("mousemove", function(event) {
			if (!mouse) {
				return;
			}
			var pos = {x: event.clientX, y: event.clientY};
			inspector_rotate(pos.x - mouse.x, pos.y - mouse.y);
			current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
			mouse = pos;
		}, false);
	})();
	$("#zoom-in").addEventListener("click", function() {
		inspector.scale(1.05);
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	}, false);
	$("#zoom-out").addEventListener("click", function() {
		inspector.scale(1 / 1.05);
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	}, false);

	(function() {
		var touch = [];
		canvas.addEventListener("touchstart", function(event) {
			touch = Array.prototype.map.call(event.targetTouches, function(t) {
				return {x: t.clientX, y: t.clientY};
			});
		}, false);
		canvas.addEventListener("touchend", function(event) {
			touch = Array.prototype.map.call(event.targetTouches, function(t) {
				return {x: t.clientX, y: t.clientY};
			});
		}, false);
		canvas.addEventListener("touchmove", function(event) {
			var pos = Array.prototype.map.call(event.targetTouches, function(t) {
				return {x: t.clientX, y: t.clientY};
			});
			if (touch.length == pos.length && touch.length > 0) {
				if (touch.length == 1) {
					inspector_rotate(pos[0].x - touch[0].x, pos[0].y - touch[0].y);
				} else if (touch.length == 2) {
					inspector.scale(distance(pos[0], pos[1]) / distance(touch[0], touch[1]));
				} else {
					inspector.scale(Math.sqrt(area(convex_hull(pos)) / area(convex_hull(touch))));
				}
				current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
			}
			touch = pos;
		}, false);
	})();
}, false);
