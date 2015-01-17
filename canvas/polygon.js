var Polygon = function(vertex, color_bound, color_inside) {
	this.vertex = vertex;
	this.color_bound = color_bound || null;
	this.color_inside = color_inside || null;
};

Polygon.prototype.clone = function() {
	var facelet = new Polygon(this.vertex, this.color_bound,
			this.color_inside);
	facelet.vertex = facelet.vertex.map(function(vertex) {
		return vertex.clone();
	});
	return facelet;
};

Polygon.prototype.translate = function(x, y, z) {
	this.vertex.forEach(function(vertex) {
		vertex.translate(x, y, z);
	});
	return this;
};

Polygon.prototype.scale = function(ratio_x, ratio_y, ratio_z) {
	this.vertex.forEach(function(vertex) {
		vertex.scale(ratio_x, ratio_y, ratio_z);
	});
	return this;
};

Polygon.prototype.rotate = function(axis, angle) {
	this.vertex.forEach(function(vertex) {
		vertex.rotate(axis, angle);
	});
	return this;
};

Polygon.prototype.skew = function(direction, ratio) {
	this.vertex.forEach(function(vertex) {
		vertex.skew(direction, ratio);
	});
	return this;
};

Polygon.prototype.transform = function(matrix) {
	this.vertex.forEach(function(vertex) {
		vertex.transform(matrix);
	});
	return this;
};

Polygon.prototype.draw = function(context, inspector, width) {
	var point = this.vertex.map(function(v) {
		return v.project(inspector);
	});
	context.beginPath();
	context.moveTo(point[point.length - 1].x, point[point.length - 1].y);
	point.forEach(function(p) {
		context.lineTo(p.x, p.y);
	});
	context.closePath();
	if (this.color_inside) {
		context.fillStyle = this.color_inside;
		context.fill();
	}
	if (this.color_bound && width) {
		context.lineWidth = width;
		context.strokeStyle = this.color_bound;
		context.stroke();
	}
};