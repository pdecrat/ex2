Template.SurveyView.onCreated(function() {
	var self = this;
	var id = self.data._id;
	self.autorun(function() {
			self.subscribe('Survey', {id: self.data});
	});

	self.getSurvey = function() {
		return Survey.findOne({ _id: id });
	}
});

Template.SurveyView.events({
  'click .voteSurvey': function(e,t) {
    e.preventDefault();
    Meteor.call('voteSurvey', t.data._id, this.name);
  }
});

Template.SurveyView.helpers({
	survey: function() {
		 return Template.instance().getSurvey();
	}
});
