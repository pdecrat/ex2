Template.registerHelper('isAdmin', function(userId) {
    return Roles.checkRole(userId, 'admin');
});

Template.registerHelper('isSuperior', function(userId) {
  return Roles.checkRole(userId, 'superior');
});

Template.registerHelper('isCoordinator', function(userId, itemId) {
  return Roles.checkRole(userId, 'coordinator', itemId);
});

Template.registerHelper('isReferee', function(userId, itemId) {
  return Roles.checkRole(userId, 'referee', itemId);
});
