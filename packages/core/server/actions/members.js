Actions.freeForMembers = function(origin, target, params) {
  if (!_.contains(target.members, origin._id))
    Actions.giveCredits(origin, target, params);
}

Actions.becomeMember = function(origin, target, params) {
  if (_.contains(target.members, origin._id))
    throw new Meteor.Error('already-member', "You are already a member.");
  if (target.members)
    target.members.push(origin._id);
  else {
    target.members = [origin._id];
  }
}
