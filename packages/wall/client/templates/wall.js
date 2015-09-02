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
		return (Meteor.userId() === this.author.id) ? "right" : "left";
	},
	'OwnsL': function() {
		return (Meteor.userId() === this.author.id) ? "left" : "right";
	}
})

Template.wall.events({
	'submit form': function(e) {
		e.preventDefault();
		key= this._id;
		userId = Meteor.userId()
		user = Meteor.users.findOne(userId);
		var authorObj = {
			id: Meteor.userId(),
			username: user.username
		};
		post = {author: authorObj, content: e.target.content.value, createdAt: new Date()};
		Meteor.call('insertPost', userId, key, post);
	}
});
