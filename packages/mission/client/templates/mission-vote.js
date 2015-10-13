Template.MissionVote.events({
  'click .voteCoordinateur': function(e,t) {
    e.preventDefault();
    Meteor.call('voteCoordinateur', t.data._id, this.toString());
  }
});
