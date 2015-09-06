Meteor.publish("team", function (params) {
  if (params.action == 'list')
    return Team.find();
  return Team.find({ _id: params.id });
});
