Actions.isAdmin = function(origin) {
  if (!_.contains(origin.roles, 'admin'))
    throw new Meteor.Error('not-admin', "You are not admin");
}
