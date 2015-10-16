Template.Wall.onCreated(function() {
	var self = this;
	var data = self.data;
	var attachedTo = {_id: data._id, type: data.type}

	self.autorun(function() {
		var sub = self.subscribe('wallSub', { action: 'Item', attachedTo: attachedTo });
	});
	self.getWall = function() {
		return Wall.findOne({ attachedTo: attachedTo });
	}
});

Template.Wall.helpers({
	'posts': function() {
		wall = Template.instance().getWall();
		return wall ? wall.posts : wall;
	},
	'count': function() {
		wall = Template.instance().getWall();
		return wall ? (wall.posts ? wall.posts.length : 0 ) : 0;
	},
	'Owns': function() {
		return (Meteor.user() && Meteor.user().username === this.inCharge) ? "right" : "left";
	}
})

// need to add client side validation for e.target.content.value

Template.Wall.events({
	'submit form': function(e, t) {
		e.preventDefault();
		var target = {_id: this._id, type: this.type};
		var content = e.target.content.value;
		Meteor.call('post', target, content, function(err, res) {
			if (err) {
				Errors.throw(err);
			}
		});
	}
});
