Template.SurveyViewDisplay.onCreated(function() {


	var self = this;
	console.log(self);
	var id = self.data._id;
	self.autorun(function() {
	//	self.subscribe('survey', {action: 'view', id: id});
			self.subscribe('survey', self.data);
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

		return survey
	}
});
