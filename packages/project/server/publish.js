Meteor.publish("Project", function (params) {
  if (params.action == 'List')
    return Project.find();
  return Project.find({ _id: params._id });
});

// Generate training project  "Mes premiers avec Collectivz" on startup

if (Project.find().count() == 0)
{
  projectMembers = [];
  project = {
    type: "Project",
    title: "Mes premiers pas avec Collectivz",
    content: "Decouvre la plateform Collectivz en quelques missions!",
    owner: "Collectivz",
    members: projectMembers,
    templates: [
     {name: 'Description', templates: 'description'},
     {name: 'Missions', templates: 'missions'},
     {name: 'Teams', templates: 'teams'},
     {name: 'Map', templates: 'map'},
     {name: 'Comment', templates: 'Wall'},
     {name: 'Wiki', templates: 'wiki'} ]
  };
  projectId = Project.insert(project);
}
