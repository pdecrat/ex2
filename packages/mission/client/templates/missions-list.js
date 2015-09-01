Template.missionListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('mission', {action: 'list'});
	});
	self.getMissions = function() {
		return Mission.find();
	}
});

Template.missionListDisplay.helpers({
	missions: function() {
		return Template.instance().getMissions();
	}
});
