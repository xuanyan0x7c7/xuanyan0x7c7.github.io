var Vertex = function(x, y, z) {
	this.x = x || 0.0;
	this.y = y || 0.0;
	this.z = z || 0.0;
};

Vertex.prototype.clone = function() {
	return new Vertex(this.x, this.y, this.z);
};

Vertex.prototype.translate = function(x, y, z) {
	this.x += x;
	this.y += y;
	this.z += z;
	return this;
};

Vertex.prototype.scale = function(scale_x, scale_y, scale_z) {
	if (arguments.length == 1) {
		scale_y = scale_x;
		scale_z = scale_x;
	}
	this.x *= scale_x;
	this.y *= scale_y;
	this.z *= scale_z;
	return this;
};

Vertex.prototype.rotate = function(axis, angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var inverse_length = 1 / axis.length;
	var a = axis.x * inverse_length;
	var b = axis.y * inverse_length;
	var c = axis.z * inverse_length;
	var x = this.x * (a * a + (1 - a * a) * cos)
		+ this.y * (a * b * (1 - cos) - c * sin)
		+ this.z * (a * c * (1 - cos) + b * sin);
	var y = this.y * (b * b + (1 - b * b) * cos)
		+ this.z * (b * c * (1 - cos) - a * sin)
		+ this.x * (b * a * (1 - cos) + c * sin);
	var z = this.z * (c * c + (1 - c * c) * cos)
		+ this.x * (c * a * (1 - cos) - b * sin)
		+ this.y * (c * b * (1 - cos) + a * sin);
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};

Vertex.prototype.skew = function(direction, ratio) {
	this[direction[3]] += ratio * this[direction[0]];
	return this;
};

Vertex.prototype.transform = function(matrix) {
	var x = this.x * matrix[0][0] + this.y * matrix[0][1]
			+ this.z * matrix[0][2] + matrix[0][3];
	var y = this.x * matrix[1][0] + this.y * matrix[1][1]
			+ this.z * matrix[1][2] + matrix[1][3];
	var z = this.x * matrix[2][0] + this.y * matrix[2][1]
			+ this.z * matrix[2][2] + matrix[2][3];
	this.x = x;
	this.y = y;
	this.z = z;
	return this;
};

Vertex.prototype.innerProduct = function(other) {
	return this.x * other.x + this.y * other.y + this.z * other.z;
};

Vertex.prototype.crossProduct = function(other) {
	return new Vertex(this.y * other.z - this.z * other.y,
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x);
};

Vertex.prototype.project = function(inspector) {
	var eye = inspector.eye;
	var k1 = eye.innerProduct(eye);
	var k2 = this.innerProduct(eye);
	var vector = inspector.origin.getVector(this).scale(k1 / (k1 - k2));
	return {
		x: vector.innerProduct(inspector.axis_x),
		y: vector.innerProduct(inspector.axis_y)
	};
};

Vertex.prototype.distance = function(other) {
	var dx = this.x - other.x;
	var dy = this.y - other.y;
	var dz = this.z - other.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

Object.defineProperty(Vertex.prototype, "length", {
	get: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y
			+ this.z * this.z);
	}
});

Vertex.prototype.normalize = function() {
	var inverse_length = 1 / this.length;
	this.x *= inverse_length;
	this.y *= inverse_length;
	this.z *= inverse_length;
	return this;
};

Vertex.prototype.getVector = function(other) {
	return new Vertex(other.x - this.x, other.y - this.y, other.z - this.z);
};

Vertex.prototype.toString = function() {
	return "(" + this.x + ", " + this.y + ", " + this.z + ")";
}

Vertex.linear_combination = function() {
	var sum = {x: 0, y: 0, z: 0};
	var args = arguments.length >>> 1;
	for (var i = 0; i < args; ++i) {
		var v = arguments[2 * i];
		var k = arguments[2 * i + 1];
		sum.x += k * v.x;
		sum.y += k * v.y;
		sum.z += k * v.z;
	}
	return sum;
};