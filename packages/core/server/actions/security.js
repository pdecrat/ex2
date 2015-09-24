Actions.isAdmin = function(origin) {
  if (!_.contains(origin.roles, 'admin'))
    throw new Meteor.Error('not-admin', "You are not admin");
}

Actions.isInCharge = function(origin, target) {
  if (!origin._id === target.inCharge)
    throw new Meteor.Error('not-in-charge', "You are not in charge of this");
}
