Meteor.publish("Idea", function (params) {
  if (params.action == 'List')
    return Idea.find();
  return Idea.find({ _id: params._id });
});
