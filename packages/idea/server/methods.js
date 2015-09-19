var upgraded = function(id) {
  var idea = Idea.findOne(id);
  var members = [];

  idea.members.forEach(function(element) {
    var memberElection = {};
    memberElection.id = element.id;
    memberElection.username = element.username;
    memberElection.remainingVote = 3;
    memberElection.voted = 0;
    members.push(memberElection);
  });

  project = {title: idea.title, content: idea.content, owner: idea.owner, members: idea.members};
  projectId = Project.insert(project);
  var election = {
    votes: 0,
    members: members,
    project: projectId,
    createdAt: new Date()
  };

  electionId = Election.insert(election);
  var wall = {key: electionId, from: "election"};
  Wall.insert(wall);

  // Notif.addNotification(idea.members, {
  //   content: "Un nouveau projet est né : ",
  //   title: idea.title,
  //   fromType: "project",
  //   projectId: projectId
  // })
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
