Meteor.methods({
  giveToken: function(userId, role, itemId) {
    var currentUserId = Meteor.userId();

    if (Roles.isAdmin(currentUserId) || Roles.isSuperior(currentUserId))
      Roles.giveToken(userId, role, itemId);
  },
  removeToken: function(userId, role, itemId) {
    var currentUserId = Meteor.userId();

    if (Roles.isAdmin(currentUserId) || Roles.isSuperior(currentUserId))
      Roles.removeToken(userId, role, itemId);
  }
});
