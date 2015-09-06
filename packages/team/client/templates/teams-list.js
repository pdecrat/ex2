Template.teamListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('team', {action: 'list'});
	});
	self.getTeams = function() {
		return Team.find();
	}
});

Template.teamListDisplay.helpers({
	teams: function() {
		return Template.instance().getTeams();
	},
	teamsCount: function() {
		return Template.instance().getTeams().count();
	}
})
