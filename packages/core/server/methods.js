Meteor.methods({
  'markAsSeen': function(notifId) {
    if (typeof notifId === "number") {
      Meteor.users.update({ _id: Meteor.userId(), 'notification._id': notifId }, { $set: { 'notification.$.seen': true }});
    }
  }
});
