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

	var canvas = document.getElementById("magic");
	var resize = function() {
		canvas.width = document.documentElement.clientWidth;
		canvas.height = document.documentElement.clientHeight;
		repaint();
	};
	var repaint = function() {
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	};
	this.addEventListener("resize", resize, false);
	var context = canvas.getContext("2d");

	var inspector = new Inspector(new Vertex(8, 0, 6));
	inspector.near = 1;
	var get_stroke_width = function() {
		return 2 / Math.min(canvas.width, canvas.height);
	};
	var clear_screen = function() {
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		var scale = Math.min(canvas.width, canvas.height) / 2;
		context.setTransform(scale, 0, 0, -scale, canvas.width / 2, canvas.height / 2);
	};

	var animation = {};
	magics.forEach(function(magic) {
		animation[magic.value] = function() {
			return magic.animation.call(magic.create(), context, function() {
				return inspector;
			}, get_stroke_width, clear_screen);
		};
	});

	var select = document.getElementById("select");
	magics.forEach(function(magic) {
		select.options.add(new Option(magic.text, magic.value));
		if (magic.init_display === true) {
			select.value = select.value || magic.value;
		}
	});
	var current_animation = animation[select.value || magics[0].value]();
	resize();
	current_animation.animate();

	select.addEventListener("change", function(event) {
		current_animation.stop();
		current_animation = animation[this.value]();
		current_animation.animate();
	}, false);

	document.getElementById("replay").addEventListener("click", function() {
		current_animation.stop();
		current_animation = animation[select.value]();
		current_animation.animate();
	}, false);

	document.getElementById("reset-view").addEventListener("click", function() {
		inspector = new Inspector(new Vertex(8, 0, 6));
		inspector.near = 1;
		current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
	}, false);

	var get_mouse_position = function(event) {
		return {x: event.clientX, y: event.clientY};
	};
	var get_touch_positions = function(event) {
		return Array.prototype.map.call(event.targetTouches, function(t) {
			return {x: t.clientX, y: t.clientY};
		});
	};
	var inspector_rotate = function(x, y) {
		if (x == 0 && y == 0) {
			return;
		}
		var angle = Math.sqrt(x * x + y * y) / Math.min(canvas.width, canvas.height) * Math.PI;
		var axis = inspector.axis_y.clone().scale(x).getVector(inspector.axis_x.clone().scale(-y));
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
			mouse = get_mouse_position(event);
		}, false);
		canvas.addEventListener("mouseup", function() {
			mouse = null;
		}, false);
		canvas.addEventListener("mousemove", function(event) {
			if (!mouse) {
				return;
			}
			var pos = get_mouse_position(event);
			inspector_rotate(pos.x - mouse.x, pos.y - mouse.y);
			current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
			mouse = pos;
		}, false);
	})();

	(function() {
		var touch = [];
		canvas.addEventListener("touchstart", function(event) {
			touch = get_touch_positions(event);
		}, false);
		canvas.addEventListener("touchend", function(event) {
			touch = get_touch_positions(event);
		}, false);
		canvas.addEventListener("touchmove", function(event) {
			var pos = get_touch_positions(event);
			if (touch.length == pos.length) {
				if (touch.length == 1) {
					inspector_rotate(pos[0].x - touch[0].x, pos[0].y - touch[0].y);
					current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
				} else if (touch.length == 2) {
					var old_distance = distance(touch[0], touch[1]);
					var new_distance = distance(pos[0], pos[1]);
					inspector.scale(new_distance / old_distance);
					current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
				} else if (touch.length >= 3) {
					var old_area = area(convex_hull(touch));
					var new_area = area(convex_hull(pos));
					inspector.scale(Math.sqrt(new_area / old_area));
					current_animation.animation_object.draw(context, inspector, get_stroke_width, clear_screen);
				}
			}
			touch = pos;
		}, false);
	})();
}, false);
