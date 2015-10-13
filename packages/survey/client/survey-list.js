Template.SurveyList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('survey', {action: 'list'});
	});
	self.getSurveys = function() {
		return Survey.find();
	}
});

Template.SurveyList.helpers({
	surveys: function() {
		return Template.instance().getSurveys();
	}
});
