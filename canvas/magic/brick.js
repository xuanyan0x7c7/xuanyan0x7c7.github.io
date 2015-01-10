var Brick = function(width, height) {
	width /= 2;
	height /= 2;
	var vertex = [
		new Vertex(width, width, height),
		new Vertex(-width, width, height),
		new Vertex(-width, -width, height),
		new Vertex(width, -width, height),
		new Vertex(width, width, -height),
		new Vertex(-width, width, -height),
		new Vertex(-width, -width, -height),
		new Vertex(width, -width, -height)
	];
	var get_vertex_array = function() {
		return Array.prototype.slice.call(arguments).map(function(x) {
			return vertex[x].clone();
		});
	};
	this.facelet = [
		new Facelet(new Vertex(0, 0, height), new Vertex(0, 0, 1))
				.push(new Polygon(get_vertex_array(0, 1, 2, 3), "black", "gray")),
		new Facelet(new Vertex(0, 0, -height), new Vertex(0, 0, -1))
				.push(new Polygon(get_vertex_array(4, 5, 6, 7), "black", "gray")),
		new Facelet(new Vertex(0, width, 0), new Vertex(0, 1, 0))
				.push(new Polygon(get_vertex_array(0, 1, 5, 4), "black", "white")),
		new Facelet(new Vertex(0, -width, 0), new Vertex(0, -1, 0))
				.push(new Polygon(get_vertex_array(2, 3, 7, 6), "black", "white")),
		new Facelet(new Vertex(width, 0, 0), new Vertex(1, 0, 0))
				.push(new Polygon(get_vertex_array(0, 3, 7, 4), "black", "white")),
		new Facelet(new Vertex(-width, 0, 0), new Vertex(-1, 0, 0))
				.push(new Polygon(get_vertex_array(1, 2, 6, 5), "black", "white"))
	];
};

Brick.prototype.clone = function() {
	var brick = new Brick(0, 0);
	brick.facelet = this.facelet.map(function(facelet) {
		return facelet.clone();
	});
	return brick;
};

Brick.prototype.draw = function(context, inspector, width) {
	var all_facelet = this.facelet.slice();
	all_facelet.sort(function(x, y) {
		return inspector.eye.distance(y.center) - inspector.eye.distance(x.center);
	});
	all_facelet.forEach(function(facelet) {
		facelet.draw(context, inspector, width);
	});
};

Brick.prototype.translate = function(x, y, z) {
	this.facelet.forEach(function(facelet) {
		facelet.translate(x, y, z);
	});
	return this;
};

Brick.prototype.scale = function(x, y, z) {
	this.facelet.forEach(function(facelet) {
		facelet.scale(x, y, z);
	});
	return this;
};

Brick.prototype.rotate = function(axis, angle) {
	this.facelet.forEach(function(facelet) {
		facelet.rotate(axis, angle);
	});
	return this;
};

Brick.prototype.skew = function(direction, ratio) {
	this.facelet.forEach(function(facelet) {
		facelet.skew(direction, ratio);
	});
	return this;
};

Brick.prototype.transform = function(matrix) {
	this.facelet.forEach(function(facelet) {
		facelet.transform(matrix);
	});
	return this;
};