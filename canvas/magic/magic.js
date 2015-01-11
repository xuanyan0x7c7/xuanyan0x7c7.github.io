var Magic = function(width, height) {
	height = height || width / 10;
	this.brick = [0, 1, 2, 3, 4, 5, 6, 7].map(function() {
		return new Brick(width, height);
	});

	width /= 2;
	height /= 2;
	this.width = width;
	this.height = height;

	var k = 4 / 3 * (Math.SQRT2 - 1);

	[4, 5, 6].forEach(function(index) {
		var vertex = [
			new Vertex(-0.1 * width, -width, 0),
			new Vertex(-width, -0.1 * width, 0),
			new Vertex(-width, -0.4 * width, 0),
			new Vertex(-0.4 * width, -width, 0)
		];
		var control = [
			[new Vertex(-0.1 * width, -(1 - 0.9 * k) * width, 0), new Vertex(-(1 - 0.9 * k) * width, -0.1 * width, 0)],
			[new Vertex(-width, -0.2 * width, 0), new Vertex(-width, -0.3 * width, 0)],
			[new Vertex(-(1 - 0.6 * k) * width, -0.4 * width, 0), new Vertex(-0.4 * width, -(1 - 0.6 * k) * width, 0)],
			[new Vertex(-0.3 * width, -width, 0), new Vertex(-0.2 * width, -width, 0)]
		];
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[5, 6, 7].forEach(function(index) {
		var vertex = [
			new Vertex(-0.1 * width, width, 0),
			new Vertex(-width, 0.1 * width, 0),
			new Vertex(-width, 0.4 * width, 0),
			new Vertex(-0.4 * width, width, 0)
		];
		var control = [
			[new Vertex(-0.1 * width, (1 - 0.9 * k) * width, 0), new Vertex(-(1 - 0.9 * k) * width, 0.1 * width, 0)],
			[new Vertex(-width, 0.2 * width, 0), new Vertex(-width, 0.3 * width, 0)],
			[new Vertex(-(1 - 0.6 * k) * width, 0.4 * width, 0), new Vertex(-0.4 * width, (1 - 0.6 * k) * width, 0)],
			[new Vertex(-0.3 * width, width, 0), new Vertex(-0.2 * width, width, 0)]
		];
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[1, 2, 3].forEach(function(index) {
		var vertex = [
			new Vertex(0.1 * width, -width, 0),
			new Vertex(width, -0.1 * width, 0),
			new Vertex(width, -0.4 * width, 0),
			new Vertex(0.4 * width, -width, 0)
		];
		var control = [
			[new Vertex(0.1 * width, -(1 - 0.9 * k) * width, 0), new Vertex((1 - 0.9 * k) * width, -0.1 * width, 0)],
			[new Vertex(width, -0.2 * width, 0), new Vertex(width, -0.3 * width, 0)],
			[new Vertex((1 - 0.6 * k) * width, -0.4 * width, 0), new Vertex(0.4 * width, -(1 - 0.6 * k) * width, 0)],
			[new Vertex(0.3 * width, -width, 0), new Vertex(0.2 * width, -width, 0)]
		];
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[0, 1, 2].forEach(function(index) {
		var vertex = [
			new Vertex(0.1 * width, width, 0),
			new Vertex(width, 0.1 * width, 0),
			new Vertex(width, 0.4 * width, 0),
			new Vertex(0.4 * width, width, 0)
		];
		var control = [
			[new Vertex(0.1 * width, (1 - 0.9 * k) * width, 0), new Vertex((1 - 0.9 * k) * width, 0.1 * width, 0)],
			[new Vertex(width, 0.2 * width, 0), new Vertex(width, 0.3 * width, 0)],
			[new Vertex((1 - 0.6 * k) * width, 0.4 * width, 0), new Vertex(0.4 * width, (1 - 0.6 * k) * width, 0)],
			[new Vertex(0.3 * width, width, 0), new Vertex(0.2 * width, width, 0)]
		];
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[1, 2, 6].forEach(function(index) {
		var vertex = [
			new Vertex(0.4 * width, -width, 0),
			new Vertex(-width, 0.4 * width, 0),
			new Vertex(-width, 0.1 * width, 0),
			new Vertex(0.1 * width, -width, 0)
		];
		var control = [
			[new Vertex(0.4 * width, -(1 - 1.4 * k) * width, 0), new Vertex(-(1 - 1.4 * k) * width, 0.4 * width, 0)],
			[new Vertex(-width, 0.3 * width, 0), new Vertex(-width, 0.2 * width, 0)],
			[new Vertex(-(1 - 1.1 * k) * width, 0.1 * width, 0), new Vertex(0.1 * width, -(1 - 1.1 * k) * width, 0)],
			[new Vertex(0.2 * width, -width, 0), new Vertex(0.3 * width, -width, 0)]
		];
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[0, 2, 3, 5, 7].forEach(function(index) {
		var vertex = [
			new Vertex(0.4 * width, width, 0),
			new Vertex(-width, -0.4 * width, 0),
			new Vertex(-width, -0.1 * width, 0),
			new Vertex(0.1 * width, width, 0)
		];
		var control = [
			[new Vertex(0.4 * width, (1 - 1.4 * k) * width, 0), new Vertex(-(1 - 1.4 * k) * width, -0.4 * width, 0)],
			[new Vertex(-width, -0.3 * width, 0), new Vertex(-width, -0.2 * width, 0)],
			[new Vertex(-(1 - 1.1 * k) * width, -0.1 * width, 0), new Vertex(0.1 * width, (1 - 1.1 * k) * width, 0)],
			[new Vertex(0.2 * width, width, 0), new Vertex(0.3 * width, width, 0)]
		];
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[5].forEach(function(index) {
		var vertex = [
			new Vertex(-0.4 * width, -width, 0),
			new Vertex(width, 0.4 * width, 0),
			new Vertex(width, 0.1 * width, 0),
			new Vertex(-0.1 * width, -width, 0)
		];
		var control = [
			[new Vertex(-0.4 * width, -(1 - 1.4 * k) * width, 0), new Vertex((1 - 1.4 * k) * width, 0.4 * width, 0)],
			[new Vertex(width, 0.3 * width, 0), new Vertex(width, 0.2 * width, 0)],
			[new Vertex((1 - 1.1 * k) * width, 0.1 * width, 0), new Vertex(-0.1 * width, -(1 - 1.1 * k) * width, 0)],
			[new Vertex(-0.2 * width, -width, 0), new Vertex(-0.3 * width, -width, 0)]
		];
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[0, 4, 5].forEach(function(index) {
		var vertex = [
			new Vertex(-0.4 * width, width, 0),
			new Vertex(width, -0.4 * width, 0),
			new Vertex(width, -0.1 * width, 0),
			new Vertex(-0.1 * width, width, 0)
		];
		var control = [
			[new Vertex(-0.4 * width, (1 - 1.4 * k) * width, 0), new Vertex((1 - 1.4 * k) * width, -0.4 * width, 0)],
			[new Vertex(width, -0.3 * width, 0), new Vertex(width, -0.2 * width, 0)],
			[new Vertex((1 - 1.1 * k) * width, -0.1 * width, 0), new Vertex(-0.1 * width, (1 - 1.1 * k) * width, 0)],
			[new Vertex(-0.2 * width, width, 0), new Vertex(-0.3 * width, width, 0)]
		];
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	this.brick[4].facelet[0].push(new Polygon([
		new Vertex(0.2 * width, 0.2 * width, 0),
		new Vertex(0.2 * width, 0.8 * width, 0),
		new Vertex(0.8 * width, 0.8 * width, 0),
		new Vertex(0.8 * width, 0.2 * width, 0)
	], null, "yellow").translate(0, 0, height));

	this.brick[7].facelet[1].push(new Polygon([
		new Vertex(0.2 * width, -0.2 * width, 0),
		new Vertex(0.2 * width, -0.8 * width, 0),
		new Vertex(0.8 * width, -0.8 * width, 0),
		new Vertex(0.8 * width, -0.2 * width, 0)
	], null, "yellow").translate(0, 0, -height));

	this.brick[0].translate(-width, -3 * width, 0);
	this.brick[1].translate(-width, -width, 0);
	this.brick[2].translate(-width, width, 0);
	this.brick[3].translate(-width, 3 * width, 0);
	this.brick[4].translate(width, 3 * width, 0);
	this.brick[5].translate(width, width, 0);
	this.brick[6].translate(width, -width, 0);
	this.brick[7].translate(width, -3 * width, 0);
};

Magic.prototype.draw = function(context, inspector, width, clear_screen) {
	if (context instanceof Function) {
		context = context();
	}
	if (inspector instanceof Function) {
		inspector = inspector();
	}
	if (width instanceof Function) {
		width = width();
	}
	if (clear_screen) {
		clear_screen();
	}

	var all_facelet = [];
	var normal = inspector.origin.getVector(inspector.eye).normalize();
	this.brick.forEach(function(brick) {
		brick.facelet.forEach(function(facelet) {
			var vector = facelet.center.getVector(inspector.eye);
			if (facelet.normal.innerProduct(vector) >= 0) {
				var distance = vector.innerProduct(normal);
				if (distance >= inspector.near && distance <= inspector.far) {
					all_facelet.push(facelet);
				}
			}
		});
	});
	all_facelet.sort(function(x, y) {
		return inspector.eye.distance(y.center) - inspector.eye.distance(x.center);
	});
	all_facelet.forEach(function(facelet) {
		facelet.draw(context, inspector, width);
	});
};

Magic.prototype.solve = function(context, inspector, width, clear_screen) {
	var list = new AnimationList(this);

	list.push(function() {
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 1, 100);

	list.push(function(step) {
		var radius = Math.sqrt(this.width * this.width + this.height * this.height);
		var theta = Math.atan2(this.height, this.width);
		var begin_angle = theta * (1 - (step - 1) / 5);
		var end_angle = theta * (1 - step / 5);
		[0, 7].forEach(function(index) {
			this.brick[index].translate(0, -2 * radius * (Math.cos(end_angle) - Math.cos(begin_angle)), 0);
		}, this);
		[1, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * radius * Math.cos(begin_angle), this.height)
				.rotate(new Vertex(-1, 0, 0), theta / 5)
				.translate(0, -2 * radius * Math.cos(end_angle), -this.height);
		}, this);
		[2, 5].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * radius * Math.cos(begin_angle), this.height)
				.rotate(new Vertex(1, 0, 0), theta / 5)
				.translate(0, 2 * radius * Math.cos(end_angle), -this.height);
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index].translate(0, 2 * radius * (Math.cos(end_angle) - Math.cos(begin_angle)), 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var radius = Math.sqrt(this.width * this.width + this.height * this.height);
		var begin = Math.acos(1 - (1 - this.height / radius) * begin_step);
		var end = Math.acos(1 - (1 - this.height / radius) * end_step);
		[0, 7].forEach(function(index) {
			this.brick[index].translate(0, 2 * (radius - this.height) / 30, 0);
		}, this);
		[1, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * (radius - (radius - this.height) * begin_step), this.height)
				.rotate(new Vertex(-1, 0, 0), end - begin)
				.translate(0, -2 * (radius - (radius - this.height) * end_step), -this.height);
		}, this);
		[2, 5].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * (radius - (radius - this.height) * begin_step), this.height)
				.rotate(new Vertex(1, 0, 0), end - begin)
				.translate(0, 2 * (radius - (radius - this.height) * end_step), -this.height);
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index].translate(0, -2 * (radius - this.height) / 30, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		[0, 7].forEach(function(index) {
			this.brick[index].translate(0, 2 * this.height / 30, 0);
		}, this);
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.height * (1 - begin_step), this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.height * (1 - end_step), -this.height);
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index].translate(0, -2 * this.height / 30, 0);
		}, this);
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.height * (1 - begin_step), this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -2 * this.height * (1 - end_step), -this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[1].translate(0, 0, 4 * this.height / 60);
		[2, 3, 4].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, -this.height);
		}, this);
		this.brick[5]
			.translate(0, 0, 3 * this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(0, 0, -3 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, 0, this.height / 5);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		[0, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -2 * this.height * (1 - begin_step))
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 0, 2 * this.height * (1 - end_step));
		}, this);
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, 2 * this.height * (1 - begin_step))
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, -2 * this.height * (1 - end_step));
		}, this);
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -2 * this.height * (1 - begin_step))
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, 2 * this.height * (1 - end_step));
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, 2 * this.height * (1 - begin_step))
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 0, -2 * this.height * (1 - end_step));
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].rotate(new Vertex(1, 0, 0), Math.PI / 2 / 60);
		}, this);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.rotate(new Vertex(-1, 0, 0), Math.PI / 2 * begin_step)
				.translate(0, -2 * this.height, 0)
				.rotate(new Vertex(0, 0, 1), Math.PI / 60)
				.translate(0, 2 * this.height, 0)
				.rotate(new Vertex(1, 0, 0), Math.PI / 2 * end_step);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, 0, this.height / 5);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[3]
			.translate(0, 0, -5 * this.height)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, 0, 5 * this.height);
		this.brick[4].translate(0, 0, 4 * this.height / 60);
		this.brick[5].skew("x->z", -2 * this.height / this.width / 60);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(2 * this.width, 0, -5 * this.height)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(-2 * this.width, 0, 5 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {
		[1, 2, 3, 4].forEach(function(index) {
			this.brick[index]
				.translate(2 * this.width, 0, -this.height)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(-2 * this.width, 0, this.height);
		}, this);
		this.brick[5].skew("x->z", 2 * this.height / this.width / 60);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[0].skew("x->z", 2 * this.height / this.width / 60);
		this.brick[1].translate(0, 0, -4 * this.height / 60);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, 3 * this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, -3 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[0].skew("x->z", -2 * this.height / this.width / 60);
		[1, 2].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 60);
		}, this);
		this.brick[3]
			.translate(2 * this.width, 0, 3 * this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(-2 * this.width, 0, -3 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, -this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index]
				.rotate(new Vertex(-1, Math.SQRT2 + 1, 0), Math.PI * begin_step)
				.translate(2 * this.width / 60, 0, 0)
				.rotate(new Vertex(1, -(Math.SQRT2 + 1), 0), Math.PI * end_step);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	return list;
};

Magic.prototype.solveBeginner = function(context, inspector, width, clear_screen) {
	var list = new AnimationList(this);

	list.push(function() {
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 3].forEach(function(index) {
			this.brick[index]
				.translate(this.width * begin_step, 0, -this.height * (1 - begin_step))
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(-this.width * end_step, 0, this.height * (1 - end_step));
		}, this);
		[4, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(-this.width / 60, 0, -this.height / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		this.brick[0]
			.translate(0, 2 * this.width * (2 - begin_step), 0)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, -2 * this.width * (2 - end_step), 0);
		[1, 2, 3].forEach(function(index) {
			this.brick[index].translate(
				0,
				2 * this.width * (Math.cos(Math.PI * end_step) - Math.cos(Math.PI * begin_step) + 1 / 60),
				2 * this.width * (Math.sin(Math.PI * end_step) - Math.sin(Math.PI * begin_step))
			);
		}, this);
		this.brick[4]
			.translate(0, -2 * this.width * (1 + begin_step), 0)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, 2 * this.width * (1 + end_step), 0);
		[5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, 2 * this.width / 60, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(-this.width / 60, 0, this.height / 60);
		}, this);
		[1, 2, 3, 4].forEach(function(index) {
			this.brick[index]
				.translate(-this.width * (1 - begin_step), 0, -this.height * begin_step)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(this.width * (1 - end_step), 0, this.height * end_step);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -2 * this.width, this.height);
		}, this);
		[4, 5].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, 0, -2 * this.height / 30).rotate(new Vertex(0, 0, 1), Math.PI / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, -this.height);
		}, this);
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -2 * this.width, -this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[3]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		this.brick[4].translate(0, 0, 4 * this.height / 60);
		this.brick[5]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", 2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.brick[5]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[0]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", 2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		this.brick[1].translate(0, 0, 4 * this.height / 60);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[3]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[1, 2].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		this.brick[0]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(2, 0, -this.height)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(-2, 0, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].rotate(new Vertex(0, 0, -1), Math.PI / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 15);

	return list;
};

Magic.prototype.toCube = function(context, inspector, width, clear_screen) {
	var list = new AnimationList(this);

	list.push(function() {
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index].rotate(new Vertex(0, -1, 0), Math.PI / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -2 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 3].forEach(function(index) {
			this.brick[index].translate(-this.width / 60, 0, 0);
		}, this);
		this.brick[4]
			.translate(this.width * begin_step, 0, -this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(-this.width * end_step, 0, this.height);
		this.brick[5]
			.translate(this.width * begin_step, -2 * this.width, -this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI * begin_step)
			.skew("y->z", 2 * this.height / this.width / 60)
			.rotate(new Vertex(0, 1, 0), Math.PI * end_step)
			.translate(-this.width * end_step, 2 * this.width, this.height);
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(this.width * begin_step, 0, -3 * this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(-this.width * end_step, 0, 3 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function(step) {
		var begin_step = (step - 1) / 5;
		var end_step = step / 5;
		var radius = Math.sqrt(this.width * this.width + this.height * this.height);
		var theta = Math.atan2(this.height, this.width);
		[0, 1, 6, 7].forEach(function(index) {
			this.brick[index].translate(
				0,
				-2 * radius * (Math.cos(theta * (1 - end_step)) - Math.cos(theta * (1 - begin_step))),
				-3 * this.height / 5
			);
		}, this);
		this.brick[2]
			.translate(0, -2 * this.width, this.height * (1 + begin_step))
			.rotate(new Vertex(1, 0, 0), theta / 5)
			.translate(0, 2 * this.width, -this.height * (1 + end_step));
		[3, 4].forEach(function(index) {
			this.brick[index].translate(0, 0, -this.height / 5);
		}, this);
		this.brick[5]
			.translate(0, -2 * this.width, -this.height * (3 - begin_step))
			.rotate(new Vertex(1, 0, 0), theta * begin_step)
			.skew("y->z", 2 * this.height / this.width / 5)
			.rotate(new Vertex(-1, 0, 0), theta * end_step)
			.translate(0, 2 * this.width, this.height * (3 - end_step));
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var radius = Math.sqrt(this.width * this.width + this.height * this.height);
		var theta = Math.atan2(this.height, this.width);
		var begin_angle = Math.PI / 2 * begin_step + theta;
		var end_angle = Math.PI / 2 * end_step + theta;
		var begin_theta = Math.asin(Math.sin(begin_angle) - this.height * (1 - begin_step) / radius);
		var end_theta = Math.asin(Math.sin(end_angle) - this.height * (1 - end_step) / radius);
		this.brick[0]
			.translate(0, -2 * radius * (Math.cos(begin_angle) - Math.cos(begin_theta)), 0)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, 2 * radius * (Math.cos(end_angle) - Math.cos(end_theta)), 0);
		this.brick[1].translate(
			0,
			-2 * radius * (Math.cos(end_theta) - Math.cos(begin_theta)),
			-2 * radius * (Math.sin(end_angle) - Math.sin(begin_angle))
		);
		this.brick[2]
			.translate(0, -2 * this.width, 2 * this.height * (1 - begin_step))
			.rotate(new Vertex(1, 0, 0), end_theta - begin_theta)
			.translate(0, 2 * this.width, -2 * this.height * (1 - end_step));
		this.brick[3]
			.translate(0, -2 * this.width, 2 * this.height * (1 - begin_step))
			.rotate(new Vertex(-1, 0, 0), Math.acos(1 - step / 30) - Math.acos(1 - begin_step))
			.translate(0, 2 * this.width, -2 * this.height * (1 - end_step));
		this.brick[4]
			.translate(0, -2 * this.width, -2 * this.height * (1 - begin_step))
			.rotate(new Vertex(1, 0, 0), Math.acos(1 - step / 30) - Math.acos(1 - begin_step))
			.translate(0, 2 * this.width, 2 * this.height * (1 - end_step));
		this.brick[5]
			.translate(0, -2 * this.width, -2 * this.height * (1 - begin_step))
			.rotate(new Vertex(-1, 0, 0), end_theta - begin_theta)
			.translate(0, 2 * this.width, 2 * this.height * (1 - end_step));
		this.brick[6].translate(
			0,
			-2 * radius * (Math.cos(end_theta) - Math.cos(begin_theta)),
			2 * radius * (Math.sin(end_angle) - Math.sin(begin_angle))
		);
		this.brick[7]
			.translate(0, -2 * radius * (Math.cos(begin_angle) - Math.cos(begin_theta)), 0)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(0, 2 * radius * (Math.cos(end_angle) - Math.cos(end_theta)), 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, this.height / 60, 0);
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(-this.width, -2 * this.width - this.height * begin_step, 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(this.width, 2 * this.width + this.height * end_step, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 5, 6, 7].forEach(function(index) {
			this.brick[index].translate(0, this.height / 60, 0);
		}, this);
		[3, 4].forEach(function(index) {
			this.brick[index]
				.translate(-this.width, -2 * this.width + this.height * (1 - begin_step), 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(this.width, 2 * this.width - this.height * (1 - end_step), 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var radius = Math.sqrt(this.width * this.width + this.height * this.height);
		var theta = Math.atan2(this.height, this.width);
		var begin_angle = Math.PI / 2 * begin_step - theta;
		var end_angle = Math.PI / 2 * end_step - theta;
		this.brick[0]
			.translate(0, 2 * this.width * begin_step, 0)
			.rotate(new Vertex(1, 0, 0), Math.PI / 2 * (1 - begin_step))
			.skew("y->z", -this.height / this.width / 30)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 2 * (1 - end_step))
			.translate(0, -2 * this.width * end_step, 0);
		this.brick[1].translate(0, 0, -2 * radius * (Math.cos(end_angle) - Math.cos(begin_angle)));
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * (this.width + radius * Math.sin(begin_angle)), 0)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 2 * (this.width + radius * Math.sin(end_angle)), 0);
		}, this);
		[4, 5].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * (this.width + radius * Math.sin(begin_angle)), 0)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * (this.width + radius * Math.sin(end_angle)), 0);
		}, this);
		this.brick[6].translate(0, 0, 2 * radius * (Math.cos(end_angle) - Math.cos(begin_angle)));
		this.brick[7]
			.translate(0, 2 * this.width * begin_step, 0)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 2 * (1 - begin_step))
			.skew("y->z", this.height / this.width / 30)
			.rotate(new Vertex(1, 0, 0), Math.PI / 2 * (1 - end_step))
			.translate(0, -2 * this.width * end_step, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function(step) {
		var begin_step = (step - 1) / 5;
		var end_step = step / 5;
		this.brick[0]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", this.height / this.width / 5)
			.translate(0, -2 * this.width, 0)
		this.brick[1]
			.translate(0, -2 * this.width, 2 * this.height * begin_step)
			.skew("y->z", -2 * this.height / this.width / 5)
			.translate(0, 2 * this.width, -2 * this.height * end_step);
		[2, 3, 4, 5, 6].forEach(function(index) {
			this.brick[index].translate(0, 0, -2 * this.height / 5);
		}, this);
		this.brick[7]
			.translate(0, 0, -2 * this.height / 5)
			.skew("y->z", -this.height / this.width / 5);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 2, 3, 4].forEach(function(index) {
			this.brick[index]
				.translate(-this.width * (1 - (step - 1) / 60), 0, 2 * this.height * begin_step)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(this.width * (1 - step / 60), 0, -2 * this.height * end_step);
		}, this);
		[5, 6, 7].forEach(function(index) {
			this.brick[index].translate(-this.width / 60, 0, -2 * this.height / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[1].skew("y->z", -2 * this.height / this.width / 60);
		this.brick[2]
			.translate(0, -2 * this.width, -2 * this.height)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, 2 * this.width, 2 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, -this.width, 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(0, this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin = Math.PI / 2 * ((step - 1) / 30);
		var end = Math.PI / 2 * (step / 30);
		[0, 1, 2, 7].forEach(function(index) {
			this.brick[index].translate(
				0,
				2 * this.width * (Math.cos(end) - Math.cos(begin)),
				2 * this.width * (Math.sin(end) - Math.sin(begin))
			)
		}, this);
		this.brick[3]
			.translate(0, 2 * this.width, 0)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, -2 * this.width, 0);
		this.brick[6].rotate(new Vertex(1, 0, 0), Math.PI / 60);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin = [Math.PI / 2 * ((step - 1) / 60)];
		var end = [Math.PI / 2 * (step / 60)];
		var get_angle1 = function(angle) {
			var sin = Math.sin(angle[0]);
			var cos = Math.cos(angle[0]);
			return Math.atan(cos) - Math.asin((1 - sin) / Math.sqrt(1 + cos * cos));
		};
		begin.push(get_angle1(begin));
		end.push(get_angle1(end));
		var get_angle2 = function(angle) {
			var sin = angle.map(Math.sin);
			var cos = angle.map(Math.cos);
			return Math.atan2(1 + sin[1], cos[1] - cos[0]) - Math.asin(1 / Math.sqrt(2 * sin[0] + cos[0] * cos[0])) - angle[1];
		};
		begin.push(get_angle2(begin));
		end.push(get_angle2(end));
		var get_angle3 = function(angle) {
			if (angle[0] == 0) {
				return [0, 0];
			} else if (angle[0] == Math.PI / 2) {
				return [Math.PI / 4, Math.PI];
			} else {
				var sin = angle.map(Math.sin);
				var cos = angle.map(Math.cos);
				return [
					Math.atan2(1 + sin[1] - cos[2], sin[1] + cos[0] * sin[2]),
					Math.acos(cos[0] - sin[0] * (sin[2] + cos[1]))
				];
			}
		};
		Array.prototype.push.apply(begin, get_angle3(begin));
		Array.prototype.push.apply(end, get_angle3(end));
		this.brick[0]
			.translate(0, 0, -2 * this.width)
			.rotate(new Vertex(-1, 0, 0), begin[3])
			.rotate(new Vertex(0, 1, 0), end[4] - begin[4])
			.rotate(new Vertex(1, 0, 0), end[3])
			.translate(0, 0, 2 * this.width);
		this.brick[1]
			.translate(0, 2 * this.width, 0)
			.rotate(new Vertex(0, -1, 0), begin[0])
			.rotate(new Vertex(-1, 0, 0), begin[1])
			.translate(2 * this.width, 0, -2 * this.width)
			.rotate(new Vertex(-1, 0, 0), begin[2])
			.rotate(new Vertex(0, 1, 0), Math.acos(1 - Math.sin(end[0])) - Math.acos(1 - Math.sin(begin[0])))
			.rotate(new Vertex(1, 0, 0), end[2])
			.translate(-2 * this.width, 0, 2 * this.width)
			.rotate(new Vertex(1, 0, 0), end[1])
			.rotate(new Vertex(0, 1, 0), end[0])
			.translate(0, -2 * this.width, 0);
		this.brick[2]
			.translate(0, 2 * this.width, 0)
			.rotate(new Vertex(0, -1, 0), begin[0])
			.rotate(new Vertex(-1, 0, 0), begin[1])
			.translate(0, 0, -2 * this.width)
			.rotate(new Vertex(1, 0, 0), end[2] - begin[2])
			.translate(0, 0, 2 * this.width)
			.rotate(new Vertex(1, 0, 0), end[1])
			.rotate(new Vertex(0, 1, 0), end[0])
			.translate(0, -2 * this.width, 0);
		this.brick[3]
			.translate(0, 2 * this.width, 0)
			.rotate(new Vertex(0, -1, 0), begin[0])
			.rotate(new Vertex(1, 0, 0), end[1] - begin[1])
			.rotate(new Vertex(0, 1, 0), end[0])
			.translate(0, -2 * this.width, 0);
		this.brick[4].rotate(new Vertex(0, 1, 0), Math.PI / 120);
		this.brick[7]
			.translate(0, 0, -2 * this.width)
			.rotate(new Vertex(1, 0, 0), end[3] - begin[3])
			.translate(0, 0, 2 * this.width);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		this.brick[0]
			.translate(
				0,
				-(1 + Math.SQRT2) * this.height * begin_step,
				-(2 * this.width + (1 + Math.SQRT2) * this.height * begin_step)
			)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(
				0,
				(1 + Math.SQRT2) * this.height * end_step,
				2 * this.width + (1 + Math.SQRT2) * this.height * end_step
			);
		this.brick[7]
			.translate(
				0,
				-(1 + Math.SQRT2) * this.height * begin_step,
				-(2 * this.width + (1 + Math.SQRT2) * this.height * begin_step)
			)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(
				0,
				(1 + Math.SQRT2) * this.height * end_step,
				2 * this.width + (1 + Math.SQRT2) * this.height * end_step
			);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		[0, 1, 2, 3, 4, 5, 6, 7].forEach(function(index) {
			this.brick[index]
				.translate(-this.width / 45, 0, 0)
				.translate(0, Math.SQRT1_2 * this.width, -(1 - Math.SQRT1_2) * this.width)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -Math.SQRT1_2 * this.width, (1 - Math.SQRT1_2) * this.width);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 45);

	return list;
};