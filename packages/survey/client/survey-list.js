Template.SurveyList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('surveySub', {action: 'List'});
	});

});

Template.SurveyList.helpers({
	surveys: function() {
		return Survey.find({});
	}
});
