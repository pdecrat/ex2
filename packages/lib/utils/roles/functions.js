Roles = {};

Roles.giveToken = function (userId, role, itemId) {
  var user = Meteor.users.findOne(userId);
  var token = {
    itemId: '',
    admin: false,
    superior: false,
    coordinator: false,
    referee: false
  };

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
    default:
      break;
  }
  Meteor.users.update(userId, {$addToSet: {roles: token}});
};

Roles.removeToken = function(userId, role, itemId) {
  if (itemId) {
    Meteor.users.update(userId, {$pull: { roles: { itemId: itemId }}});
  } else {
    switch (role) {
      case 'admin':
        Meteor.users.update(userId, {$pull: { roles: { admin: true }}});
        break;
      case 'superior':
        Meteor.users.update(userId, {$pull: { roles: { superior: true }}});
        break;
      default:
        break;
    }
  }
};

Roles.getRoles = function (userId) {
  return Meteor.users.findOne(userId).roles;
};

Roles.isAdmin = function (userId) {
  var roles = Roles.getRoles(userId);

  if (_.find(roles, function(elem) { return elem.admin === true; }))
    return true;
  return false;
};

Roles.isSuperior = function (userId) {
  var roles = Roles.getRoles(userId);

  if (_.find(roles, function(elem) { return elem.superior === true; }))
    return true;
  return false;
};

Roles.getRoleFor = function (userId, itemId) {
  var roles = Roles.getRoles(userId);
  var role = undefined;

  _.each(roles, function(elem) {
    if (elem.id === itemId){
      return role = (elem.referee === true) ? 'referee' : 'coordinator';
    }
  }, itemId);
  return role;
};
