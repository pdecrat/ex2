Meteor.publish('projectSub', function(id) {
   if (this.userId) {
      if (id && typeof id === "string")
         return Project.find({_id: id})
      return Project.find({})
   }
   return null;
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
     {name: 'Description', templates: 'Description'},
     {name: 'Missions', templates: 'Missions'},
     {name: 'Teams', templates: 'Teams'},
     {name: 'Map', templates: 'Map'},
     {name: 'Comment', templates: 'Wall'},
     {name: 'Wiki', templates: 'Wiki'} ]
  };
  projectId = Project.insert(project);
}
