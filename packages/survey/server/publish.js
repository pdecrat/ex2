Meteor.publish("Survey", function (params) {
  if (params.action == 'List')
    return Survey.find({});
  return Survey.find({ _id: params.id });
});
