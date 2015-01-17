var Inspector = function(eye, origin, axis_y, near, far) {
	this.eye = eye;
	this.origin = origin;
	eye = origin.getVector(eye).normalize();
	this.axis_y = Vertex.linear_combination(
		[axis_y, 1], [eye, -Vertex.innerProduct(axis_y, eye)]
	).normalize();
	this.axis_x = Vertex.crossProduct(this.axis_y, eye);
	this.near = near || 1;
	this.far = far || Infinity;
};

Inspector.prototype.translate = function(x, y, z) {
	this.eye.translate(x, y, z);
	this.origin.translate(x, y, z);
	return this;
};

Inspector.prototype.scale = function(ratio) {
	var x = this.origin.x;
	var y = this.origin.y;
	var z = this.origin.z;
	this.eye.translate(-x, -y, -z).scale(1 / ratio).translate(x, y, z);
	return this;
};

Inspector.prototype.rotate = function(axis, angle) {
	this.eye.rotate(axis, angle);
	this.axis_x.rotate(axis, angle);
	this.axis_y.rotate(axis, angle);
	return this;
};