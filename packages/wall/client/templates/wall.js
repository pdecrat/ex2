Template.wall.onCreated(function() {
	var self = this;
	console.log(this)
	var key = self.data._id;
	self.autorun(function() {
		var sub = self.subscribe('wall', { key: key });
	});
	self.getWall = function() {
		return Wall.findOne({ key: key });
	}
});

Template.wall.helpers({
	'posts': function() {
		wall = Template.instance().getWall();
		if (wall)
			return wall.posts;
	}
})

Template.wall.events({
	'submit form': function(e) {
		e.preventDefault();
		console.log(this)
		key= this._id;
		userId = Meteor.userId()
		user = Meteor.users.findOne(userId);
		post = {username: user.username, content: e.target.content.value};
		Meteor.call('insertPost', userId, key, post);
	}
});
