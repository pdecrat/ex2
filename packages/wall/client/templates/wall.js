Template.wall.helpers({
	'posts': function() {
		wall = Walls.findOne(this.wall);
		if (wall)
			return wall.posts
	}
})

Template.wall.events({
	'submit form': function(e) {
		e.preventDefault();
		userId = Meteor.userId()
		user = Meteor.users.findOne(userId);
		post = {username: user.username, content: e.target.content.value};
		Meteor.call('insertPost', userId, wall._id, post);
	//	}
	//	else
	//		console.log("wtf");
	}
});
