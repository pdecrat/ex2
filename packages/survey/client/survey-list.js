Template.surveyListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var sub = self.subscribe('survey', {action: 'list'});
	});
	self.getSurveys = function() {
		return Survey.find();
	}
});

Template.surveyListDisplay.helpers({
	surveys: function() {
		return Template.instance().getSurveys();
	}
});
