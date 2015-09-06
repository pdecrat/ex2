Meteor.methods({
  giveToken: function(userId, role, itemId) {
    var currentUserId = Meteor.userId();

    if (Roles.checkRole(currentUserId, 'admin') || Roles.checkRole(currentUserId, 'superior'))
      Roles.giveToken(userId, role, itemId);
  },
  removeToken: function(userId, role, itemId) {
    var currentUserId = Meteor.userId();

    if (Roles.checkRole(currentUserId, 'admin') || Roles.checkRole(currentUserId, 'superior'))
      Roles.removeToken(userId, role, itemId);
  }
});
