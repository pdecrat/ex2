Meteor.publish("Team", function (params) {
  if (params.action == 'List')
    return Team.find();
  return Team.find({ _id: params.id });
});
