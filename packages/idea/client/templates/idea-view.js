Template.ideaViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;

	self.autorun(function() {
		self.subscribe('idea', {action: 'view', id: id});
	});

	self.getIdea = function() {
		return Idea.findOne({ _id: id });
	}
});

Template.ideaViewDisplay.helpers({
	idea: function() {
		var idea = Template.instance().getIdea();
		if(idea === undefined)
			FlowRouter.go('/not-found');
		return idea
	}
});
