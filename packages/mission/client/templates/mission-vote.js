Template.missionItem.helpers({
  voteCoordinateur: function() {
       return 'btn-primary voteCoordinateur';
  }
});

Template.missionItem.events({
  'click .voteCoordinateur': function(e) {
    e.preventDefault();
    Meteor.call('voteCoordinateur', this._id);
  }
});
