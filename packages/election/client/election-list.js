Template.ElectionList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('electionSub', null);
	});

});

Template.ElectionList.helpers({
	elections: function() {
		return Election.find({});
	}
});
