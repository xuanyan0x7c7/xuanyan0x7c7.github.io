var MasterMagic = function(width, height) {
	height = height || width / 10;
	this.brick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function() {
		return new Brick(width, height);
	});

	width /= 2;
	height /= 2;
	this.width = width;
	this.height = height;

	var k = 4 / 3 * (Math.sqrt(2) - 1);

	[6, 7, 8, 9, 10].forEach(function(index) {
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
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[7, 8, 9, 10, 11].forEach(function(index) {
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
			[new Vertex(0.2 * width, width, -0), new Vertex(0.3 * width, width, -0)]
		];
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[1, 2, 3, 4, 5].forEach(function(index) {
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
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[0, 1, 2, 3, 4].forEach(function(index) {
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
		this.brick[index].facelet[0].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, height));
	}, this);

	[1, 3, 5, 10].forEach(function(index) {
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
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[0, 2, 5, 10, 11].forEach(function(index) {
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
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[3, 4, 6, 8, 9].forEach(function(index) {
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
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	[0, 3, 5, 7, 8, 10].forEach(function(index) {
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
		this.brick[index].facelet[1].push(new BezierFacelet(vertex, control, null, "red").translate(0, 0, -height));
	}, this);

	this.brick[6].facelet[0].push(new Polygon([
		new Vertex(0.2 * width, 0.2 * width, 0),
		new Vertex(0.2 * width, 0.8 * width, 0),
		new Vertex(0.8 * width, 0.8 * width, 0),
		new Vertex(0.8 * width, 0.2 * width, 0)
	], null, "yellow").translate(0, 0, height));

	this.brick[11].facelet[1].push(new Polygon([
		new Vertex(0.2 * width, -0.2 * width, 0),
		new Vertex(0.2 * width, -0.8 * width, 0),
		new Vertex(0.8 * width, -0.8 * width, 0),
		new Vertex(0.8 * width, -0.2 * width, 0)
	], null, "yellow").translate(0, 0, -height));

	this.brick[0].translate(-width, -5 * width, 0);
	this.brick[1].translate(-width, -3 * width, 0);
	this.brick[2].translate(-width, -width, 0);
	this.brick[3].translate(-width, width, 0);
	this.brick[4].translate(-width, 3 * width, 0);
	this.brick[5].translate(-width, 5 * width, 0);
	this.brick[6].translate(width, 5 * width, 0);
	this.brick[7].translate(width, 3 * width, 0);
	this.brick[8].translate(width, width, 0);
	this.brick[9].translate(width, -width, 0);
	this.brick[10].translate(width, -3 * width, 0);
	this.brick[11].translate(width, -5 * width, 0);
};

MasterMagic.prototype.draw = function(context, inspector, width, clear_screen) {
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
			if (Vertex.innerProduct(facelet.normal, vector) >= 0) {
				var distance = Vertex.innerProduct(vector, normal);
				if (distance >= inspector.near && distance <= inspector.far) {
					all_facelet.push(facelet);
				}
			}
		});
	});
	all_facelet.sort(function(x, y) {
		return Vertex.distance(inspector.eye, y.center) - Vertex.distance(inspector.eye, x.center);
	});
	all_facelet.forEach(function(facelet) {
		facelet.draw(context, inspector, width);
	});
};

MasterMagic.prototype.solve = function(context, inspector, width, clear_screen) {
	var list = new AnimationList(this);

	list.push(function() {
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 1, 100);

	list.push(function() {
		[0, 11].forEach(function(index) {
			this.brick[index]
				.translate(0, 4 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -4 * this.width, this.height);
		}, this);
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, -4 * this.width, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 4 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[0]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[1, 7].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 60);
		}, this);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", -this.height / this.width / 60)
				.translate(0, 2 * this.width, 0);
		}, this);
		this.brick[6]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, 0)
				.skew("y->z", this.height / this.width / 60)
				.translate(0, -2 * this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 5);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, 0)
				.skew("y->z", this.height / this.width / 30)
				.translate(0, -2 * this.width, 0);
		}, this);
		[4, 5].forEach(function(index) {
			this.brick[index]
				.translate(0, -(2 * this.width + 2 * this.height * begin_step), this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width + 2 * this.height * end_step, -this.height);
		}, this);
		[8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", -this.height / this.width / 30)
				.translate(0, 2 * this.width, 0);
		}, this);
		[10, 11].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width + 2 * this.height * begin_step, this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, -(2 * this.width + 2 * this.height * end_step), -this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var angle = -(Math.acos(end_step) - Math.acos(begin_step));
		[0, 1, 2, 3].forEach(function(index) {
			this.brick[index].translate(0, -2 * this.width / 30, 0);
		}, this);
		this.brick[4]
			.translate(0, -2 * this.width * (1 - begin_step), this.height * (1 - 2 * begin_step))
			.rotate(new Vertex(1, 0, 0), angle)
			.translate(0, 2 * this.width * (1 - end_step), -this.height * (1 - 2 * end_step));
		this.brick[5]
			.translate(0, -2 * this.width * (1 + begin_step), this.height * (1 - 2 * begin_step))
			.rotate(new Vertex(-1, 0, 0), angle)
			.translate(0, 2 * this.width * (1 + end_step), -this.height * (1 - 2 * end_step));
		[6, 7, 8, 9].forEach(function(index) {
			this.brick[index].translate(0, 2 * this.width / 30, 0);
		}, this);
		this.brick[10]
			.translate(0, 2 * this.width * (1 - begin_step), this.height * (1 - 2 * begin_step))
			.rotate(new Vertex(-1, 0, 0), angle)
			.translate(0, -2 * this.width * (1 - end_step), -this.height * (1 - 2 * end_step));
		this.brick[11]
			.translate(0, 2 * this.width * (1 + begin_step), this.height * (1 - 2 * begin_step))
			.rotate(new Vertex(1, 0, 0), angle)
			.translate(0, -2 * this.width * (1 + end_step), -this.height * (1 - 2 * end_step));
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[5, 6, 7, 8].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -this.height * (3 - 2 * begin_step))
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, this.height * (3 - 2 * end_step));
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	(function() {
		var brick = null;
		list.push(function(step) {
			var begin_step = (step - 1) / 30;
			var end_step = step / 30;
			brick = brick || this.brick[8].clone();
			var angle = Math.PI / 2 * end_step;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);
			this.brick[5].translate(2 * this.height / 30, 0, 0);
			this.brick[6]
				.translate(0, 2 * this.height * begin_step, 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(0, -2 * this.height * end_step, 0);
			this.brick[7].rotate(new Vertex(0, 0, -1), Math.PI / 60);
			this.brick[8] = brick.clone()
				.translate(0, 0, -this.height)
				.transform([[cos, 0, -sin * sin, 0], [-sin, cos, -sin * cos, 0], [0, sin, cos * cos, 0]])
				.translate(0, 0, this.height);
			this.brick[9]
				.translate(0, 0, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, this.height);
			this.draw(context, inspector, width, clear_screen);
		}.bind(this), 30);
	}.bind(this))();

	(function() {
		var brick = null;
		list.push(function(step) {
			var begin_step = (step - 1) / 30;
			var end_step = step / 30;
			brick = brick || this.brick[6].clone();
			var angle = Math.PI / 2 * end_step;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);
			this.brick[5]
				.translate(0, 0, -this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, this.height);
			this.brick[6] = brick.clone()
				.translate(0, 0, -this.height)
				.transform([[cos, sin * cos, sin, 0], [-sin, cos * cos, 0, 0], [0, -sin * sin, cos, 0]])
				.translate(0, 0, this.height);
			this.brick[7].rotate(new Vertex(0, 0, -1), Math.PI / 60);
			this.brick[8]
				.translate(2 * this.height * (1 - begin_step), 0, 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(-2 * this.height * (1 - end_step), 0, 0);
			this.brick[9].translate(0, -2 * this.height / 30, 0);
			this.draw(context, inspector, width, clear_screen);
		}.bind(this), 30);
	}.bind(this))();

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		[8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -this.height * (1 + 2 * begin_step))
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 0, this.height * (1 + 2 * end_step));
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[6, 7, 8, 9].forEach(function(index) {
			this.brick[index]
				.translate(-2 * this.width, 0, -this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(2 * this.width, 0, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(function(index) {
			this.brick[index].rotate(new Vertex(-1, -(Math.SQRT2 + 1), 0), Math.PI / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1].forEach(function(index) {
			this.brick[index]
				.translate(2 * Math.SQRT2, 2 * Math.SQRT2, -this.height)
				.rotate(new Vertex(-1, 1, 0), Math.PI / 60)
				.translate(-2 * Math.SQRT2, -2 * Math.SQRT2, this.height);
		}, this);
		[7, 8].forEach(function(index) {
			this.brick[index]
				.translate(2 * Math.SQRT2, -2 * Math.SQRT2, -this.height)
				.rotate(new Vertex(1, 1, 0), Math.PI / 60)
				.translate(-2 * Math.SQRT2, 2 * Math.SQRT2, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[1]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(-1, -1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		this.brick[2].translate(0, 0, 4 * this.height / 60);
		this.brick[3]
			.rotate(new Vertex(0, 0, 1), Math.PI / 4)
			.skew("y->z", -2 * this.height / this.width / 60)
			.rotate(new Vertex(0, 0, -1), Math.PI / 4);
		this.brick[5]
			.rotate(new Vertex(0, 0, -1), Math.PI / 4)
			.skew("y->z", 2 * this.height / this.width / 60)
			.rotate(new Vertex(0, 0, 1), Math.PI / 4);
		this.brick[6].translate(0, 0, 4 * this.height / 60);
		this.brick[7]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(1, -1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(Math.SQRT2, Math.SQRT2, -3 * this.height)
				.rotate(new Vertex(-1, 1, 0), Math.PI / 60)
				.translate(-Math.SQRT2, -Math.SQRT2, 3 * this.height);
		}, this);
		this.brick[3]
			.rotate(new Vertex(0, 0, 1), Math.PI / 4)
			.skew("y->z", 2 * this.height / this.width / 60)
			.rotate(new Vertex(0, 0, -1), Math.PI / 4);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(1, 1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(Math.SQRT2, -Math.SQRT2, -5 * this.height)
				.rotate(new Vertex(1, 1, 0), Math.PI / 60)
				.translate(-Math.SQRT2, Math.SQRT2, 5 * this.height);
		}, this);
		[8, 9, 10, 11].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[5]
			.rotate(new Vertex(0, 0, -1), Math.PI / 4)
			.skew("y->z", -2 * this.height / this.width / 60)
			.rotate(new Vertex(0, 0, 1), Math.PI / 4);
		this.brick[6].translate(0, 0, -4 * this.height / 60);
		[7, 8].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -5 * this.height)
				.rotate(new Vertex(-1, 1, 0), Math.PI / 60)
				.translate(0, 0, 5 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 8, 9, 10, 11].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		this.brick[1]
			.translate(Math.SQRT2, Math.SQRT2, -3 * this.height)
			.rotate(new Vertex(1, -1, 0), Math.PI / 60)
			.translate(-Math.SQRT2, -Math.SQRT2, 3 * this.height);
		this.brick[7]
			.translate(Math.SQRT2, -Math.SQRT2, -3 * this.height)
			.rotate(new Vertex(-1, -1, 0), Math.PI / 60)
			.translate(-Math.SQRT2, Math.SQRT2, 3 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(-Math.SQRT2, Math.SQRT2, -this.height)
				.rotate(new Vertex(1, 1, 0), Math.PI / 60)
				.translate(Math.SQRT2, -Math.SQRT2, this.height);
		}, this);
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(-Math.SQRT2, -Math.SQRT2, -this.height)
				.rotate(new Vertex(-1, 1, 0), Math.PI / 60)
				.translate(Math.SQRT2, Math.SQRT2, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	return list;
};

MasterMagic.prototype.solveBeginner = function(context, inspector, width, clear_screen) {
	var list = new AnimationList(this);

	list.push(function() {
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 1, 100);

	list.push(function() {
		[0, 11].forEach(function(index) {
			this.brick[index]
				.translate(0, 4 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, -4 * this.width, this.height);
		}, this);
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, -4 * this.width, -this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 4 * this.width, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[0]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[1, 7].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 60);
		}, this);
		this.brick[2].skew("y->z", -2 * this.height / this.width / 60);
		this.brick[6]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, 0)
				.skew("y->z", this.height / this.width / 60)
				.translate(0, -2 * this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -3 * this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, 3 * this.height);
		}, this);
		[8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, 2 * this.width, 0)
				.skew("y->z", -this.height / this.width / 60)
				.translate(0, -2 * this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[2]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", 2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		[3, 4].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 60);
		}, this);
		[5, 6].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[2]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		[3, 4, 5].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		this.brick[6]
			.translate(0, -2 * this.width, -3 * this.height)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(0, 2 * this.width, 3 * this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(-2 * this.width, 0, -this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(2 * this.width, 0, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		[0, 1, 10, 11].forEach(function(index) {
			this.brick[index]
				.rotate(new Vertex(0, 1, 0), Math.PI * begin_step)
				.translate(0, 0, -4 * this.height / 60)
				.rotate(new Vertex(0, -1, 0), Math.PI * end_step);
		}, this);
		[2, 9].forEach(function(index) {
			this.brick[index]
				.rotate(new Vertex(0, 1, 0), Math.PI * begin_step)
				.skew("y->z", 2 * this.height / this.width / 60)
				.rotate(new Vertex(0, -1, 0), Math.PI * end_step);
		}, this);
		[3, 4, 5, 6, 7, 8].forEach(function(index) {
			this.brick[index].rotate(new Vertex(0, -1, 0), Math.PI / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var begin = Math.PI / 2 * begin_step;
		var end = Math.PI / 2 * end_step;
		[7, 8].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, this.height);
		}, this);
		this.brick[9]
			.translate(0, 2 * this.width * Math.cos(begin), -2 * this.width * Math.sin(begin) + 2 * this.height * begin_step)
			.skew("y->z", 2 * this.height / this.width / 30)
			.translate(0, -2 * this.width * Math.cos(end), 2 * this.width * Math.sin(end) - 2 * this.height * end_step)
		this.brick[10].translate(
			0,
			2 * this.width * (Math.cos(begin) - Math.cos(end)),
			2 * this.width * (Math.sin(end) - Math.sin(begin)) - 2 * this.height / 30
		);
		this.brick[11]
			.translate(0, 2 * this.width, -this.height)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(0, -2 * this.width, this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function(step) {
		var begin_step = (step - 1) / 30;
		var end_step = step / 30;
		var begin = Math.PI / 2 * begin_step;
		var end = Math.PI / 2 * end_step;
		[7, 8].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, this.height);
		}, this);
		this.brick[9].translate(
			0,
			2 * this.width * (Math.sin(end) - Math.sin(begin)),
			2 * this.width * (Math.cos(end) - Math.cos(begin)) + 2 * this.height / 30
		);
		this.brick[10]
			.translate(0, -2 * this.width * Math.sin(begin), -2 * this.width * Math.cos(begin) - 2 * this.height * begin_step)
			.skew("y->z", 2 * this.height / this.width / 30)
			.translate(0, 2 * this.width * Math.sin(end), 2 * this.width * Math.cos(end) + 2 * this.height * end_step)
		this.brick[11]
			.translate(0, 2 * this.width, -this.height)
			.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
			.translate(0, -2 * this.width, this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 30);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 11].forEach(function(index) {
			this.brick[index].translate(0, 0, 4 * this.height / 5);
		}, this);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", -this.height / this.width / 5)
				.translate(0, 2 * this.width, 0);
		}, this);
		this.brick[10]
			.translate(0, -2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 5)
			.translate(0, 2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 5);

	list.push(function() {
		[0, 9, 10, 11].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.brick[1].translate(0, 0, -4 * this.height / 60);
		[2, 3].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", this.height / this.width / 60)
				.translate(0, 2 * this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[5].skew("x->z", -2 * this.height / this.width / 60);
		this.brick[6].translate(0, 0, 4 * this.height / 60);
		[7, 8, 9].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -3 * this.height)
				.rotate(new Vertex(1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, 3 * this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function(step) {
		var begin_step = (step - 1) / 60;
		var end_step = step / 60;
		this.brick[0]
			.translate(0, 0, -this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI / 60)
			.translate(0, 0, this.height);
		this.brick[5].skew("x->z", 2 * this.height / this.width / 60);
		[6, 7, 8].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		[9, 10].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(0, -1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.brick[11]
			.translate(0, 2 * this.width, -this.height)
			.rotate(new Vertex(0, 1, 0), Math.PI * begin_step)
			.skew("y->z", -2 * this.height / this.width / 60)
			.rotate(new Vertex(0, -1, 0), Math.PI * end_step)
			.translate(0, -2 * this.width, this.height);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[6, 7, 8, 9].forEach(function(index) {
			this.brick[index]
				.translate(2 * this.width, 0, -this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(-2 * this.width, 0, this.height);
		}, this);
		this.brick[10].translate(0, 0, -4 * this.height / 60);
		this.brick[11]
			.translate(0, 2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 60)
			.translate(0, -2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 10, 11].forEach(function(index) {
			this.brick[index].skew("x->z", -2 * this.height / this.width / 60);
		}, this);
		[7, 8].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, -3 * this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 2 * this.width, 3 * this.height);
		}, this);
		this.brick[9].translate(0, 0, 4 * this.height / 60);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 10, 11].forEach(function(index) {
			this.brick[index].skew("x->z", 2 * this.height / this.width / 60);
		}, this);
		this.brick[7]
			.translate(2 * this.width, 0, -3 * this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI / 60)
			.translate(-2 * this.width, 0, 3 * this.height);
		[8, 9].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[6, 7].forEach(function(index) {
			this.brick[index]
				.translate(0, -4 * this.width, -this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 4 * this.width, this.height);
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
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		this.brick[1]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(0, -1, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		this.brick[2].translate(0, 0, 4 * this.height / 60);
		this.brick[3]
			.translate(0, -2 * this.width, 0)
			.skew("y->z", -2 * this.height / this.width / 60)
			.translate(0, 2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(-1, 0, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		this.brick[3]
			.translate(0, -2 * this.width, 0)
			.skew("y->z", 2 * this.height / this.width / 60)
			.translate(0, 2 * this.width, 0);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1].forEach(function(index) {
			this.brick[index]
				.translate(0, 0, -3 * this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(0, 0, 3 * this.height);
		}, this);
		[9, 10].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", -2 * this.height / this.width / 60)
				.translate(0, 2 * this.width, 0);
		}, this);
		this.brick[11].translate(0, 0, 4 * this.height / 60);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 11].forEach(function(index) {
			this.brick[index].translate(0, 0, -4 * this.height / 60);
		}, this);
		this.brick[1]
			.translate(0, 0, -3 * this.height)
			.rotate(new Vertex(1, 0, 0), Math.PI / 60)
			.translate(0, 0, 3 * this.height);
		[9, 10].forEach(function(index) {
			this.brick[index]
				.translate(0, -2 * this.width, 0)
				.skew("y->z", 2 * this.height / this.width / 60)
				.translate(0, 2 * this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[1, 2].forEach(function(index) {
			this.brick[index]
				.translate(-2 * this.width, 0, -this.height)
				.rotate(new Vertex(0, 1, 0), Math.PI / 60)
				.translate(2 * this.width, 0, this.height);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 60);

	list.push(function() {}, 1, 100);

	list.push(function() {
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(function(index) {
			this.brick[index]
				.translate((Math.SQRT2 + 1) * this.width, -this.width, 0)
				.rotate(new Vertex(0, 0, -1), Math.PI / 60)
				.translate(-(Math.SQRT2 + 1) * this.width, this.width, 0);
		}, this);
		this.draw(context, inspector, width, clear_screen);
	}.bind(this), 15);

	return list;
};