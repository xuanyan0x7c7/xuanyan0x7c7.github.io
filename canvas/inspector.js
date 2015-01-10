var Inspector = function(eye, axis_x, axis_y) {
	this.eye = eye;
	if (arguments.length == 1) {
		if (eye.x == 0 && eye.y == 0) {
			this.axis_x = new Vertex(0, 1, 0);
			if (eye.z > 0) {
				this.axis_y = new Vertex(-1, 0, 0);
			} else {
				this.axis_y = new Vertex(1, 0, 0);
			}
		} else {
			this.axis_x = new Vertex(-eye.y, eye.x, 0);
			this.axis_y = eye.crossProduct(this.axis_x);
		}
		var inverse_distance = 1 / eye.length;
		this.axis_x.normalize().scale(inverse_distance);
		this.axis_y.normalize().scale(inverse_distance);
	} else {
		this.axis_x = Vertex.linear_combination(
			axis_x, 1,
			eye, -axis_x.innerProduct(eye) / eye.innerProduct(eye)
		);
		this.axis_y = Vertex.linear_combination(
			axis_y, 1,
			axis_x, -axis_y.innerProduct(axis_x) / axis_x.innerProduct(axis_x),
			eye, -axis_y.innerProduct(eye) / eye.innerProduct(eye)
		);
	}
	this.origin = new Vertex();
	this.near = 0;
	this.far = Infinity;
};

Inspector.prototype.translate = function(x, y, z) {
	this.eye.translate(x, y, z);
	this.origin.translate(x, y, z);
};

Inspector.prototype.scale = function(ratio) {
	this.eye.scale(1 / ratio);
	this.axis_x.scale(ratio);
	this.axis_y.scale(ratio);
};

Inspector.prototype.rotate = function(axis, angle) {
	this.eye.rotate(axis, angle);
	this.axis_x.rotate(axis, angle);
	this.axis_y.rotate(axis, angle);
};