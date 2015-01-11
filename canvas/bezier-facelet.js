var BezierFacelet = function(vertex, control, color_bound, color_inside) {
	this.vertex = vertex;
	this.control = control;
	this.color_bound = color_bound || null;
	this.color_inside = color_inside || null;
};

BezierFacelet.prototype.clone = function() {
	var facelet = new BezierFacelet(this.vertex, this.control,
			this.color_bound, this.color_inside);
	facelet.vertex = facelet.vertex.map(function(vertex) {
		return vertex.clone();
	});
	facelet.control = facelet.control.map(function(control) {
		return [control[0].clone(), control[1].clone()];
	});
	return facelet;
};

BezierFacelet.prototype.translate = function(x, y, z) {
	this.vertex.forEach(function(vertex) {
		vertex.translate(x, y, z);
	});
	this.control.forEach(function(control) {
		control[0].translate(x, y, z);
		control[1].translate(x, y, z);
	});
	return this;
};

BezierFacelet.prototype.scale = function(ratio_x, ratio_y, ratio_z) {
	this.vertex.forEach(function(vertex) {
		vertex.scale(ratio_x, ratio_y, ratio_z);
	});
	this.control.forEach(function(control) {
		control[0].scale(ratio_x, ratio_y, ratio_z);
		control[1].scale(ratio_x, ratio_y, ratio_z);
	});
	return this;
};

BezierFacelet.prototype.rotate = function(axis, angle) {
	this.vertex.forEach(function(vertex) {
		vertex.rotate(axis, angle);
	});
	this.control.forEach(function(control) {
		control[0].rotate(axis, angle);
		control[1].rotate(axis, angle);
	});
	return this;
};

BezierFacelet.prototype.skew = function(direction, ratio) {
	this.vertex.forEach(function(vertex) {
		vertex.skew(direction, ratio);
	});
	this.control.forEach(function(control) {
		control[0].skew(direction, ratio);
		control[1].skew(direction, ratio);
	});
	return this;
};

BezierFacelet.prototype.transform = function(matrix) {
	this.vertex.forEach(function(vertex) {
		vertex.transform(matrix);
	});
	this.control.forEach(function(control) {
		control[0].transform(matrix);
		control[1].transform(matrix);
	});
	return this;
};

BezierFacelet.prototype.draw = function(context, inspector, width) {
	var point = this.vertex.map(function(vertex) {
		return vertex.project(inspector);
	});
	point.push(point[0]);
	var control = this.control.map(function(pair) {
		return pair.map(function(point) {
			return point.project(inspector);
		});
	});
	context.beginPath();
	context.moveTo(point[0].x, point[0].y);
	for (var i = 0; i < control.length; ++i) {
		context.bezierCurveTo(
			control[i][0].x, control[i][0].y,
			control[i][1].x, control[i][1].y,
			point[i + 1].x, point[i + 1].y
		);
	}
	context.closePath();
	if (this.color_inside) {
		context.fillStyle = this.color_inside;
		context.fill();
	}
	if (this.color_bound && context.lineWidth) {
		context.lineWidth = width;
		context.strokeStyle = this.color_bound;
		context.stroke();
	}
};