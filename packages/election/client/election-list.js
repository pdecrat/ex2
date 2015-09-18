Template.electionListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('election', {action: 'list'});
	});
	self.getElections = function() {
		return Election.find();
	}
});

Template.electionListDisplay.helpers({
	elections: function() {
		return Template.instance().getElections();
	}
});
