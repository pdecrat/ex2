Actions.isAdmin = function(origin) {
  if (!_.contains(origin.roles, 'admin'))
    throw new Meteor.Error('not-admin', "You are not admin");
}

Actions.isInCharge = function(origin, target) {
  if (!origin.username === target.inCharge)
    throw new Meteor.Error('not-in-charge', "You are not in charge of this");
}

Actions.isLoggedIn = function(origin, target) {
  if (origin === undefined) {
    FlowRouter.go('/login');
    throw new Meteor.Error('not-logged-in', "Vous devez vous identifier pour faire ça.");
  }
}
