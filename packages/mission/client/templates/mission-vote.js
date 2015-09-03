Template.missionVote.helpers({
  voteCoordinateur: function() {
       return 'btn-primary voteCoordinateur';
  }
});

Template.missionVote.events({
  'click .voteCoordinateur': function(e,t) {
    e.preventDefault();
    Meteor.call('voteCoordinateur', t.data._id, this);
  }
});
