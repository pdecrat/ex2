Template.events.helpers({
  isMastermind: function() {
    currentUser = Meteor.user();
    return Meteor.userId() && currentUser.profile.role === "mastermind" ? true: false;
  }
});
