Template.ideaListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('idea', {action: 'list'});
	});
	self.getIdeas = function() {
		return Idea.find();
	}
});

Template.ideaListDisplay.helpers({
	ideas: function() {
		return Template.instance().getIdeas();
	},
	loggedIn: function() {
		return Meteor.userId();
	}
});
