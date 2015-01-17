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

Vertex.innerProduct = function(v1, v2) {
	return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
};

Vertex.crossProduct = function(v1, v2) {
	return new Vertex(v1.y * v2.z - v1.z * v2.y,
			v1.z * v2.x - v1.x * v2.z,
			v1.x * v2.y - v1.y * v2.x);
};

Vertex.prototype.project = function(inspector) {
	var eye = inspector.origin.getVector(inspector.eye);
	var length = eye.length;
	var near = inspector.near;
	var far = inspector.far;
	var vector = inspector.origin.getVector(this);
	var k1 = length * length;
	var k2 = k1 - Vertex.innerProduct(vector, eye);
	vector.scale(k1 / k2 * near / length);
	var x = Vertex.innerProduct(vector, inspector.axis_x);
	var y = Vertex.innerProduct(vector, inspector.axis_y);
	var z;
	if (far == Infinity) {
		z = 2 * near * length / k2 - 1;
	} else {
		z = (2 * far * near * length / k2 - (far + near)) /
			(far - near);
	}
	return new Vertex(x, y, z);
};

Vertex.distance = function(v1, v2) {
	var dx = v1.x - v2.x;
	var dy = v1.y - v2.y;
	var dz = v1.z - v2.z;
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
};

Vertex.linear_combination = function() {
	var sum = new Vertex();
	for (var i = 0; i < arguments.length; ++i) {
		var v = arguments[i][0];
		var k = arguments[i][1];
		sum.x += k * v.x;
		sum.y += k * v.y;
		sum.z += k * v.z;
	}
	return sum;
};