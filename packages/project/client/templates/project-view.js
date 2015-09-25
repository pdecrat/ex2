Template.projectViewDisplay.onCreated(function() {
	selectedMission = new ReactiveVar(0);
	var self = this;
	var id = self.data._id;
	self.autorun(function() {
		self.subscribe('project', {action: 'view', id: id});
		self.subscribe('mission', { key: id });
	});

	self.getProject = function() {
		return Project.findOne({ _id: id });
	}
	self.findAllMission = function(projectId) {
     return Mission.find({ project: projectId }).fetch();
	 }
	self.findOneMission = function(missionId) {
     return Mission.find({ _id: missionId }).fetch();
  }
	self.getMenu = function() {
		return self.data.subMenu
	}
});

Template.projectViewDisplay.helpers({
	project: function() {
		var project = Template.instance().getProject();
		if (project === undefined) {
		//	FlowRouter.go('/not-found');
			console.log("no project")
		}
		return project;
	},
	menuItems: function() {
		var menuTemplate = Template.instance().getMenu();
		if (menuTemplate === undefined)
				return "description";
		if(!Blaze.isTemplate(Template[menuTemplate]))
				return "not-found";
		return menuTemplate;
	},
	dataContext: function() {
		if (Template.instance().getMenu() === "missions")
		{
			if (selectedMission.get() !== 0)
				return Template.instance().findOneMission(selectedMission.get());
			return Template.instance().findAllMission(this._id);
		}
		return this;
	}
});

Template.projectViewDisplay.events({
	'click .selectMission': function(e,t) {
		e.preventDefault();
		selectedMission.set(e.currentTarget.id)
	},
	'click .reset': function(e,t) {
		selectedMission.set(0)
	}
})
