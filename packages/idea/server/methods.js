var upgraded = function(id) {
  var idea = Idea.findOne(id);
  var members = [];

  idea.members.forEach(function(element) {
    var memberProject = {};
    memberProject.id = element.id;
    memberProject.username = element.username;
    memberProject.remainingVote = 3;
    memberProject.voted = 0;
    members.push(memberProject);
  });

  project = {title: idea.title, content: idea.content, owner: idea.owner, members: members};
  projectId = Project.insert(project);
  missionMembers = [];
  members.forEach(function(element) {
    var memberProject = element.id;
    missionMembers.push(memberProject);
    });
  var mission = {
    title: "Election",
    content: "Nous vous invitons a voter pour un coordinateur",
    members: missionMembers,
    missionType: "Vote",
    finish : false,
    project: projectId,
    owner: { id: "Collectivz", username: "Collectivz"}
  };
  var wall = {key: projectId, from: "project"};
  Wall.insert(wall);

  missionId = Mission.insert(mission);
  var wall = {key: missionId, from: "mission"};
  Wall.insert(wall);

  Notif.addNotification(idea.members, {
    content: "Un nouveau projet est né : ",
    title: idea.title,
    fromType: "project",
    projectId: projectId
  })
  wall = Wall.findOne({key: id});
  Wall.update(wall, {
    $set: {
      key: projectId,
      from: "project"
      }
  });
  Idea.remove(id);
}

var upvote = function(userId, ideaId) {
 var idea = Idea.findOne(ideaId);
 var user = Meteor.users.findOne(userId);

 if (_.include(idea.members, userId))
   return false;
 Idea.update(idea._id, {
   $addToSet: {members: {id: user._id, username: user.username}},
   $inc: {votes: 1}
 });
 idea = Idea.findOne(ideaId);
 if (idea.votes >= idea.obj_backers)
   upgraded(ideaId);
};

Meteor.methods({
   upvote: function(id) {
     upvote(this.userId, id);
  },
  insertIdea: function (data) {
    if (!this.userId) {
      FlowRouter.go('/login');
      return;
    }
    var ownerObj = {
      id: this.userId,
      username: Meteor.users.findOne( {_id: this.userId }).username
    }
    console.log(data)
    var idea = {canvas: data.canvas, title: data.title, content: data.content, obj_backers: data.obj_backers, owner: ownerObj, members: [ownerObj]};
    var exist = Idea.findOne( {title: idea.title })
    if (!exist){
      ideaId = Idea.insert(idea);
      var wall = {key: ideaId, from: "idea"};
      Wall.insert(wall);
      upvote(this.userId, ideaId);
    }
  },
  updateIdea: function(data, ideaId) {
    Idea.update(ideaId, {$set: {title: data.title, content: data.content}});
  },
  removeIdea: function(ideaId) {
    Idea.remove(ideaId);
  }
});
