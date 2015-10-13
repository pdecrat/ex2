Template.TeamList.helpers({
	teams: function() {
		return Team.find({})
	}
})

Template.TeamList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('teamSub', null);
	})
})
