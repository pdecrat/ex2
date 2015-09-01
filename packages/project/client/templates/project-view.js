Template.projectViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;

	self.autorun(function() {
		self.subscribe('project', {action: 'view', id: id});
	});

	self.getProject = function() {
		return Project.findOne({ _id: id });
	}
});

Template.projectViewDisplay.helpers({
	project: function() {
		var project = Template.instance().getProject();
		if (project === undefined)
			FlowRouter.go('/not-found');
		return project;
	}
});
