Template.Survey.onCreated(function() {
  var self = this;
	var attachedTo = {_id: FlowRouter.getParam('_id'), type: FlowRouter.getParam('type')}

	self.autorun(function() {
		sub = self.subscribe('Survey', { attachedTo: attachedTo });
	});
});

Template.Survey.helpers({
	surveys: function() {
		return Survey.find();
	}
});
