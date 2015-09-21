Meteor.publish("survey", function (params) {
  if (params.action == 'list')
    return Survey.find({});
  return Survey.find({ _id: params.id });
});
