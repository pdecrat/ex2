Meteor.publish("project", function (params) {
  if (params.action == 'list')
    return Project.find();
  return Project.find({ _id: params.id });
});
