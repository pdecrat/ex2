Template.ideaViewDisplay.onCreated(function() {

	var self = this;

	self.autorun(function() {
		self.subscribe('idea', {action: 'view', id: self.data.id});
	});
	if (!Idea.findOne({_id: self.data.id}))
		FlowRouter.go('/not-found');

	self.getIdea = function() {
		return Idea.findOne({ _id: self.data.id });
	}
});

Template.ideaViewDisplay.helpers({
	idea: function() {
		return Template.instance().getIdea();
	}
});
