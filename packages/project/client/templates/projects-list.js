Template.ProjectList.helpers({
	projects: function() {
		return Project.find({})
	}
})
