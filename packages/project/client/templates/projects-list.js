Template.ProjectListDisplay.helpers({
	projects: function() {
		return Project.find({})
	}
})
