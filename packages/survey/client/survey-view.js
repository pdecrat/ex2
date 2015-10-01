Template.SurveyViewDisplay.onCreated(function() {
	var self = this;
	var id = self.data._id;
	self.autorun(function() {
			self.subscribe('Survey', self.data);
	});

	self.getSurvey = function() {
		return Survey.findOne({ _id: id });
	}
});

Template.SurveyViewDisplay.events({
  'click .voteSurvey': function(e,t) {
    e.preventDefault();
    Meteor.call('voteSurvey', t.data._id, this.name);
  }
});

Template.SurveyViewDisplay.helpers({
	survey: function() {
		 return Template.instance().getSurvey();
	}
});
