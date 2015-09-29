Meteor.publish("Project", function (params) {
  if (params.action == 'List')
    return Project.find();
  return Project.find({ _id: params._id });
});

if (Project.find().count() == 0)
{
  projectMembers = [];
  project = {
    type: "Project",
    title: "Mes premiers pas avec Collectivz",
    content: "Decouvre la plateform Collectivz en quelques missions!",
    owner: "Collectivz",
    members: projectMembers
  };
  projectId = Project.insert(project);
}
