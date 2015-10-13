Template.ProjectList.helpers({
	projects: function() {
		return Project.find({})
	}
})

Template.ProjectList.onCreated(function() {
	var self = this;
	self.autorun(function() {
	  self.subscribe('projectSub', null);
	});

})
