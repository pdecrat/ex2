Meteor.publish("project", function (params) {
  if (params.action == 'list')
    return Project.find();
  return Project.find({ _id: params.id });
});

if (Project.find().count() == 0)
{
  projectMembers = [];
  project = {title: "Mes premiers pas avec Collectivz", content: "Decouvre la plateform Collectivz en quelques mission!", owner: "Collectivz", members: projectMembers};
  projectId = Project.insert(project);
}
