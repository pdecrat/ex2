Template.missionList.onCreated(function() {
	var self = this;
	var key = self.data._id;

	self.autorun(function() {
		var sub = self.subscribe('mission', { key: key });
	});
	self.getMissions = function() {
		return Mission.find({ project: key });
	}
});

Template.missionList.helpers({
	missions: function() {
		return Template.instance().getMissions();
	}
});
