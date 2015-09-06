Roles = {};

Roles.giveToken = function (userId, role, itemId) {
  var user = Meteor.users.findOne(userId);
  var token = {
    itemId: '',
    role: role
  };

  if (itemId)
    token.id = itemId;
  Meteor.users.update(userId, {$addToSet: {roles: token}});
};

Roles.removeToken = function(userId, role, itemId) {
  if (itemId) {
    Meteor.users.update(userId, {$pull: { roles: { itemId: itemId, role: role }}});
  } else {
    Meteor.users.update(userId, {$pull: { roles: { role: role }}});
  }
};

Roles.getRoles = function (userId) {
  return Meteor.users.findOne(userId).roles;
};

Roles.checkRole = function (userId, role, itemId) {
  var roles = Roles.getRoles(userId);

  if (itemId && _.find(roles, function(elem) { return elem.role === role && elem.id === itemId; }, role, itemId))
    return true;
  else if (_.find(roles, function(elem) { return elem.role === role; }, role))
    return true;
  return false;
};

// Roles.isAdmin = function (userId) {
//   var roles = Roles.getRoles(userId);
//
//   if (_.find(roles, function(elem) { return elem.role === 'admin'; }))
//     return true;
//   return false;
// };
//
// Roles.isSuperior = function (userId) {
//   var roles = Roles.getRoles(userId);
//
//   if (_.find(roles, function(elem) { return elem.role === 'superior'; }))
//     return true;
//   return false;
// };
//
// Roles.isCoordinator = function (userId, itemId) {
//   var roles = Roles.getRoles(userId);
//
//     if (_.find(roles, function(elem) { return elem.role === 'coo'
//                                               && elem.itemId === itemId ; }, itemId))
//       return true;
//     return false;
// };
