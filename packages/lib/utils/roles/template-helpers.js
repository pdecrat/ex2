Template.registerHelper('isAdmin', function(userId) {
    return Roles.isAdmin(userId);
});

Template.registerHelper('isSuperior', function(userId) {
  return Roles.isSuperior(userId);
});

Template.registerHelper('isCoordinator', function(userId, itemId) {
  if (Roles.getRoleFor(userId, itemId) === 'coordinator')
    return true;
  return false;
});

Template.registerHelper('isReferee', function(userId, itemId) {
  if (Roles.getRoleFor(userId, itemId) === 'referee')
    return true;
  return false;
});
