// Notification method : probably needs to be changed into an action

Meteor.methods({
  'markAsSeen': function(notifId) {
    if (typeof notifId === "number") {
      Meteor.users.update({ _id: Meteor.userId(), 'notification._id': notifId }, { $set: { 'notification.$.seen': true }});
    }
  },
  'updateInterest': function(data) {
      Meteor.users.update(Meteor.userId(),
      { $addToSet: {"profile.interest" : data.interest}}
    );
  },
  'updateObjectif': function(data) {
      Meteor.users.update(Meteor.userId(),
      { $set: {"profile.objectif" : data.objectif}}
    );
  },
  'updateSkill': function(data) {
      Meteor.users.update(Meteor.userId(),
      { $addToSet: {"profile.skill" : data}}
    );
  }
});
