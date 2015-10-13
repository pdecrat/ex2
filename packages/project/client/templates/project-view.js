Template.ProjectView.onCreated(function() {
	var self = this;
	self.selectedMenu = new ReactiveVar('description');
	selectedMission = new ReactiveVar(0);

	self.autorun(function() {
		var id = FlowRouter.getParam('_id');
		self.subscribe('mission', { key: id });
	});
});

Template.ProjectView.helpers({
	project: function() {
		return Project.findOne(FlowRouter.getParam('_id'));
	},
	selectedMenu: function() {
		return Template.instance().selectedMenu.get();
	},
	dataContext: function() {
		if (Template.instance().selectedMenu.get() === "missions")
		{
			if (selectedMission.get() !== 0)
				return Mission.find({ _id: selectedMission.get() }).fetch();
			return Mission.find({ project: FlowRouter.getParam('_id') }).fetch();
		}
		return this;
	}
});

Template.ProjectView.events({
	'click .selectMission': function(e,t) {
		e.preventDefault();
		selectedMission.set(e.currentTarget.id)
	},
	'click .menuButton': function() {
		selectedMission.set(0)
		Template.instance().selectedMenu.set(this.templates);
	}
})
