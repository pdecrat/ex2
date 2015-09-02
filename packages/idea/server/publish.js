Meteor.publish("idea", function (params) {
  if (params.action == 'list')
    return Idea.find();
  return Idea.find({ _id: params.id });
});
