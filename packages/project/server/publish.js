Meteor.publish("project", function (params) {
  if (params.action == 'list')
    return Project.find();
  return Project.find({ _id: params.id });
})

Project.allow({
  insert: function (doc) {
      console.log("insertion de project");
      return true;
    },
  update: function (userId, doc) {
      currentUser = Meteor.user();
      if (Meteor.users.findOne(userId).fetch().length == 1)
        return true;
      console.log("forbidden update : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
    },
  remove: function (userId, doc) {
        return true;
      console.log("forbidden delete : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
  }
}); /*

Meteor.methods({
   archived: function(projectId) {
    var project = Projects.findOne(projectId);
    if (Meteor.userId() === project.author)
    {
      var archive;
      archive.title = project.title;
      archive.content = project.content;
      archive.author = project.author;
      archive.members = project.members;
      wallproject = Walls.findOne(project.wall);
      archive.posts = wallproject.posts;
      Walls.remove(project.wall);
      for (var i = 0; i < project.missions.length; i++)
      {
        var mission = Mission.findOne(project.missions[i]);
        var missionWall = Walls.findOne(mission.wall);
        archivedMission.title = mission.title;
        archivedMission.objectives = mission.objectives;
        archivedMission.content = mission.content;
        archivedMission.members = mission.members;
        archivedMission.team = mission.team;
        archivedMission.project = mission.project;
        archivedMission.posts = missionWall.posts;
        archivedMission.creator = mission.creator;
        archive.missions.push(archivedMission);
        Walls.remove(mission.wall);
        Mission.remove(project.missions[i]);
      }
      Archives.insert(archive);
      Projects.remove(projectId);
    }
  }
});
*/
