Template.electionViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;

	self.autorun(function() {
		self.subscribe('election', {action: 'view', id: id});
	});

	self.getElection = function() {
		return Election.findOne({ _id: id });
	}
});

Template.electionViewDisplay.events({
  'click .voteCoordinateur': function(e,t) {
    e.preventDefault();
    Meteor.call('voteCoordinateur', t.data.id, this.id);
  }
});

Template.electionViewDisplay.helpers({
	election: function() {
		var election = Template.instance().getElection();
		if(election === undefined)
			FlowRouter.go('/not-found');
		return election
	}
});
