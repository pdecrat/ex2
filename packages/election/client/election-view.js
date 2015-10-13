Template.ElectionView.onCreated(function() {

	var self = this;
	var id = self.data.id;
	self.autorun(function() {
		self.subscribe('election', {action: 'view', id: id});
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
			FlowRouter.go('/notFound');
		return election
	}
});
