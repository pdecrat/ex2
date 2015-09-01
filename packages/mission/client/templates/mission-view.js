Template.missionViewDisplay.onCreated(function() {
	var self = this;
	var id = self.data.id;
	self.autorun(function() {
		self.subscribe('mission', {action: 'view', id: id});
	});
	self.getMission = function() {
		return Mission.findOne({ _id: id });
	}
});

Template.missionViewDisplay.helpers({
	mission: function() {
		var mission = Template.instance().getMission();
		if(mission === undefined)
			FlowRouter.go('/not-found');
		return mission;
	}
});
