Roles = {};

Roles.giveToken = function (userId, role, itemId) {
  var token = {
    itemId: '',
    role: role
  };

  if (itemId)
    token.itemId = itemId;
  Meteor.users.update(userId, {$addToSet: {roles: token}});
};

Roles.removeToken = function(userId, role, itemId) {
  if (itemId) {
    Meteor.users.update(userId, {$pull: { roles: { itemId: itemId, role: role }}});
  } else {
    Meteor.users.update(userId, {$pull: { roles: { role: role }}});
  }
};

Roles.checkRole = function (userId, role, itemId) {
  var roles = Meteor.users.findOne(userId).roles;

  if (itemId && _.find(roles, function(elem) { return elem.role === role && elem.id === itemId; }, role, itemId))
    return true;
  else if (_.find(roles, function(elem) { return elem.role === role; }, role))
    return true;
  return false;
};
