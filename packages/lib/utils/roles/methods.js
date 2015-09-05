Meteor.methods({
  giveToken: function(userId, role, itemId) {
    if (Roles.isAdmin(Meteor.userId()))
      Roles.giveToken (userId, role, itemId);
  }
});
