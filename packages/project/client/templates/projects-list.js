Template.ProjectListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('Project', {action: 'List'});
	});
	self.getProjects = function() {
		return Project.find();
	}
});

Template.ProjectListDisplay.helpers({
	projects: function() {
		return Template.instance().getProjects();
	},
	projectsCount: function() {
		return Template.instance().getProjects().count();
	}
})
