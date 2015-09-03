Template.missionVote.helpers({
  voteCoordinateur: function() {
       return 'btn-primary voteCoordinateur';
  }
});

Template.missionVote.events({
  'click .voteCoordinateur': function(e,t) {
    e.preventDefault();
    console.log(t);
    console.log(t.data);
    Meteor.call('voteCoordinateur', t.data._id);
  }
});
