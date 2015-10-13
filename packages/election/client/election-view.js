Template.ElectionView.onCreated(function() {

	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('_id');
		self.subscribe('electionSub', id);
	});

	self.getElection = function() {
		return Election.findOne({ _id: id });
	}
});

Template.ElectionView.events({
  'click .voteCoordinateur': function(e,t) {
    e.preventDefault();
    Meteor.call('voteCoordinateur', t.data.id, this.id);
  }
});

Template.ElectionView.helpers({
	election: function() {
		var election = Template.instance().getElection();
		if(election === undefined)
			FlowRouter.go('/NotFound');
		return election
	}
});
