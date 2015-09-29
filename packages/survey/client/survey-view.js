Template.SurveyViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;
	self.autorun(function() {
		self.subscribe('survey', {action: 'view', id: id});
	});

	self.getSurvey = function() {
		return Survey.findOne({ _id: id });
	}
});

Template.SurveyViewDisplay.events({
  'click .voteSurvey': function(e,t) {
    e.preventDefault();
    Meteor.call('voteSurvey', t.data.id, this.proposal);
  }
});

Template.SurveyViewDisplay.helpers({
	survey: function() {
		var survey = Template.instance().getSurvey();
		if(survey === undefined)
			FlowRouter.go('/notFound');
		return survey
	}
});
