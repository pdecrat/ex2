Template.projectListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('project', {action: 'list'});
	});
	self.getProjects = function() {
		return Project.find();
	}
});

Template.projectListDisplay.helpers({
	projects: function() {
		return Template.instance().getProjects();
	},
	projectsCount: function() {
		return Template.instance().getProjects().count();
	}
})
