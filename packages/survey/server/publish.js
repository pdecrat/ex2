Meteor.publish("Survey", function (params) {
  if (params.action == 'List')
    return Survey.find({});
  return Survey.find({ attachedTo: {_id: params.attachedTo._id, type: params.attachedTo.type }});
});
