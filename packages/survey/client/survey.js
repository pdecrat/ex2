Template.Survey.onCreated(function() {
  var self = this;
	var attachedTo = {_id: self.data._id, type: self.data.type}

	self.autorun(function() {
		sub = self.subscribe('surveySub', { attachedTo: attachedTo });
	});
});

Template.Survey.helpers({
	surveys: function() {
		return Survey.find();
	}
});
