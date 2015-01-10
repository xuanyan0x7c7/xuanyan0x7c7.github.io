var Facelet = function(center, normal) {
	this.center = center;
	this.normal = normal;
	this.slice = [];
};

Facelet.prototype.clone = function() {
	var facelet = new Facelet(this.center.clone(), this.normal.clone());
	facelet.slice = this.slice.map(function(slice) {
		return slice.clone();
	});
	return facelet;
};

Facelet.prototype.push = function(slice) {
	this.slice.push(slice);
	return this;
};

Facelet.prototype.translate = function(x, y, z) {
	this.center.translate(x, y, z);
	this.slice.forEach(function(slice) {
		slice.translate(x, y, z);
	});
	return this;
};

Facelet.prototype.scale = function(ratio_x, ratio_y, ratio_z) {
	this.center.scale(ratio_x, ratio_y, ratio_z);
	this.normal.scale(1 / ratio_x, 1 / ratio_y, 1 / ratio_z);
	this.slice.forEach(function(slice) {
		slice.scale(ratio_x, ratio_y, ratio_z);
	});
	return this;
};

Facelet.prototype.rotate = function(axis, angle) {
	this.center.rotate(axis, angle);
	this.normal.rotate(axis, angle);
	this.slice.forEach(function(slice) {
		slice.rotate(axis, angle);
	});
	return this;
};

Facelet.prototype.skew = function(direction, ratio) {
	this.center.skew(direction, ratio);
	this.slice.forEach(function(slice) {
		slice.skew(direction, ratio);
	});
	var axis_x, axis_y;
	if (this.normal.z == 0) {
		axis_x = new Vertex(0, 0, 1);
		axis_y = new Vertex(this.normal.y, -this.normal.x, 0);
	} else if (this.normal.y == 0) {
		axis_x = new Vertex(0, 1, 0);
		axis_y = new Vertex(-this.normal.z, 0, this.normal.x);
	} else {
		axis_x = new Vertex(0, -this.normal.z, this.normal.y).normalize();
		axis_y = this.normal.crossProduct(axis_x).normalize();
	}
	axis_x.skew(direction, ratio);
	axis_y.skew(direction, ratio);
	this.normal = axis_x.crossProduct(axis_y);
	return this;
};

Facelet.prototype.transform = function(matrix) {
	this.center.transform(matrix);
	this.slice.forEach(function(slice) {
		slice.transform(matrix);
	});
	var axis_x, axis_y;
	if (this.normal.z == 0) {
		axis_x = new Vertex(0, 0, 1);
		axis_y = new Vertex(this.normal.y, -this.normal.x, 0);
	} else if (this.normal.y == 0) {
		axis_x = new Vertex(0, 1, 0);
		axis_y = new Vertex(-this.normal.z, 0, this.normal.x);
	} else {
		axis_x = new Vertex(0, -this.normal.z, this.normal.y).normalize();
		axis_y = this.normal.crossProduct(axis_x).normalize();
	}
	axis_x.transform(matrix);
	axis_y.transform(matrix);
	this.normal = axis_x.crossProduct(axis_y);
	return this;
};

Facelet.prototype.draw = function(context, inspector, width) {
	this.slice.forEach(function(slice) {
		slice.draw(context, inspector, width);
	});
};