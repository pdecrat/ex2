Meteor.publish("surveySub", function (params) {
  if (params.action == 'List')
    return Survey.find({});
  else if (params.action == 'View')
    return Survey.find({ _id: params._id });
  return Survey.find({ attachedTo: {_id: params.attachedTo._id, type: params.attachedTo.type }});
});
