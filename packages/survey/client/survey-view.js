Template.surveyViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;
	self.autorun(function() {
		self.subscribe('survey', {action: 'view', id: id});
	});

	self.getSurvey = function() {
		return Survey.findOne({ _id: id });
	}
});

Template.surveyViewDisplay.events({
  'click .voteSurvey': function(e,t) {
    e.preventDefault();
    Meteor.call('voteSurvey', t.data.id, this.proposal);
  }
});

Template.surveyViewDisplay.helpers({
	survey: function() {
		var survey = Template.instance().getSurvey();
		if(survey === undefined)
			FlowRouter.go('/not-found');
		return survey
	}
});
