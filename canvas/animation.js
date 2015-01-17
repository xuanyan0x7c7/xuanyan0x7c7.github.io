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

Animation.prototype.animate = function(animation_list, step) {
	step = step || 0;
	(function run() {
		if (++step == this.steps) {
			if (this.next) {
				animation_list.current = this.next;
				animation_list.step = 0;
				animation_list.timeout = setTimeout(function() {
					this.next.animate(animation_list);
				}.bind(this), this.delay);
			} else {
				animation_list.timeout = null;
				animation_list.current = null;
				animation_list.step = null;
				animation_list.callback();
			}
			this.animation(step);
			return;
		} else {
			animation_list.timeout = setTimeout(run.bind(this), this.delay);
			animation_list.step = step;
			this.animation(step);
		}
	}.bind(this))();
};

var AnimationList = function(animation_object, callback) {
	this.animation_object = animation_object;
	this.list = [new Animation()];
	this.timeout = null;
	this.current = null;
	this.step = null;
	this.callback = callback || function() {};
};

AnimationList.prototype.animate = function() {
	this.list[0].animate(this);
};

AnimationList.prototype.push = function(animation, steps, delay) {
	if (!(animation instanceof Animation)) {
		animation = new Animation(animation, steps, delay);
	}
	this.list[this.list.length - 1].next = animation;
	this.list.push(animation);
};

AnimationList.prototype.play = function() {
	if (this.current) {
		this.current.animate(this, this.step);
	}
};

AnimationList.prototype.stop = function() {
	clearTimeout(this.timeout);
};
