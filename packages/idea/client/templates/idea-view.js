Template.ideaViewDisplay.onCreated(function() {

	var self = this;

	console.log(this)
	self.autorun(function() {
		var sub = self.subscribe('idea', {action: 'view'});
	});

	self.getIdea = function() {
		console.log(Idea.find())
		return Idea.find();
	}
});

Template.ideaViewDisplay.helpers({
	idea: function() {
		return Template.instance().getIdea();
	}
});
