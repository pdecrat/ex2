Template.SurveyView.onCreated(function() {
	var self = this;
	var id = FlowRouter.getParam('_id');

	self.autorun(function() {
		var sub = self.subscribe('surveySub', { action: 'View', id: id });
	});

});

Template.SurveyView.events({
  'click .voteSurvey': function(e,t) {
    e.preventDefault();
    Meteor.call('voteSurvey', t.data._id, this.name);
  }
});

Template.SurveyView.helpers({
	survey: function() {
		var id = FlowRouter.getParam('_id');
		 return Survey.findOne(id)
	}
});
