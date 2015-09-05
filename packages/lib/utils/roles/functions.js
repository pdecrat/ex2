Roles.giveToken = function (userId, role, itemId) {
  var user = Meteor.users.findOne(userId);
  var token = Roles.token;

  if (itemId)
    token.id = itemId;
  switch (role) {
    case 'admin':
      token.admin = true;
      break;
    case 'superior':
      token.superior = true;
      break;
    case 'referee':
      token.referee = true;
      break;
    case 'coordinator':
      token.coordinator = true;
      break;
  }
  Meteor.users.update(userId, {$addToSet: {roles: token}});
};


Roles.getRoles = function (userId) {
  if (!userId)
    return Meteor.users.findOne( {_id: Meteor.userId()} ).roles;
  return Meteor.users.findOne( {_id: userId} ).roles;
};

Roles.isAdmin = function (userId) {
  var roles = Roles.getRoles(userId);
  var isAd = 0;
  _.each(roles, function(elem) {
    if (elem.admin === true)
      return isAd++;
  });
  return (isAd != 0) ? true : false;
};

Roles.isSuperior = function (userId) {
  var roles = Roles.getRoles(userId);
  var isSup = 0;

  _.each(roles, function(elem) {
    if (elem.superior === true)
      return isSup++;
  });
  return (isSup != 0) ? true : false;
};
