Template.wall.onCreated(function() {
	var self = this;
	var key = self.data._id;
	self.autorun(function() {
		var sub = self.subscribe('wall', { key: key });
	});
	self.getWall = function() {
		 Wall.findOne({ key: key });
		return Wall.findOne({ key: key });
	}
});

Template.wall.helpers({
	'posts': function() {
		wall = Template.instance().getWall();
		return wall ? wall.posts : wall;
	},
	'count': function() {
		wall = Template.instance().getWall();
		return wall ? (wall.posts ? wall.posts.length : 0 ) : 0;
	},
	'OwnsR': function() {
		return (Meteor.userId() === this.owner.id) ? "right" : "left";
	},
	'OwnsL': function() {
		return (Meteor.userId() === this.owner.id) ? "left" : "right";
	},
	isMember: function() {
		project = _.some( this.members, function( el ) {
			return el.id === Meteor.userId();
		});
		idea = _.contains(this.members, Meteor.userId());
			if (project || idea)
				return true;
			return false;
	}
})

Template.wall.events({
	'submit form': function(e) {
		e.preventDefault();
		key= this._id;
		userId = Meteor.userId()
		user = Meteor.users.findOne(userId);
		var ownerObj = {
			id: Meteor.userId(),
			username: user.username
		};
		post = {owner: ownerObj, content: e.target.content.value, createdAt: new Date()};
		Meteor.call('insertPost', userId, key, post);
	}
});
