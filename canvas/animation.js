var Animation = function(animation, steps, delay) {
	if (steps === 0) {
		animation = function() {};
	} else {
		steps = steps || 1;
	}
	this.animation = animation || function() {};
	this.steps = steps;
	this.delay = delay || Animation.delay;
	this.next = null;
};

Animation.delay = 20;

Animation.prototype.animate = function(animation_list) {
	var step = 0;
	(function run() {
		if (++step == this.steps) {
			if (this.next) {
				animation_list.timeout = setTimeout(function() {
					this.next.animate(animation_list);
				}.bind(this), this.delay);
			} else {
				animation_list.timeout = null;
			}
			this.animation(step);
			return;
		} else {
			animation_list.timeout = setTimeout(run.bind(this), this.delay);
			this.animation(step);
		}
	}.bind(this))();
};

var AnimationList = function(animation_object) {
	this.animation_object = animation_object || null;
	this.list = [new Animation()];
	this.timeout = null;
};

AnimationList.prototype.animate = function() {
	this.list[0].animate(this);
};

AnimationList.prototype.push = function(animation, steps, delay) {
	if (animation instanceof Animation) {
		this.list[this.list.length - 1].next = animation;
		this.list.push(animation);
	} else {
		var new_animation = new Animation(animation, steps, delay);
		this.list[this.list.length - 1].next = new_animation;
		this.list.push(new_animation);
	}
};

AnimationList.prototype.stop = function() {
	clearTimeout(this.timeout);
};