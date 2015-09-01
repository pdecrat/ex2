Template.ideaListDisplay.onCreated(function() {

	var instance = this;

	instance.autorun(function() {
		var sub = instance.subscribe('idea', {action: 'list'});
	});

	instance.ideas = function() {
		return Ideas.find();
	}
});

Template.ideaListDisplay.helpers({
	ideas: function() {
		return Template.instance().find({});
	}
});
