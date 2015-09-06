var upgraded = function(id) {
  var idea = Idea.findOne(id);
  var members = new Array();
  idea.members.forEach(function(element) {
    var memberProject = {};
    memberProject.id = element;
    memberProject.remainingVote = 3;
    memberProject.voted = 0;
    members.push(memberProject);
  });
  project = {title: idea.title, content: idea.content, owner: idea.owner, members: members};
  projectId = Project.insert(project);
  Roles.giveToken(idea.owner.id, 'coordinator', projectId);
  wall = Wall.findOne({key: id});
  Wall.update(wall, {
    $set: {
      key: projectId,
      from: "project"
      }
  });
  Idea.remove(id);
}

Meteor.methods({
   upvote: function(id) {
    var idea = Idea.findOne(id);
    if (_.include(idea.members, this.userId))
      return false;
    Idea.update(idea._id, {
      $addToSet: {members: this.userId},
      $inc: {votes: 1}
    });
    idea = Idea.findOne(id);
    if (idea.votes >= idea.obj_backers)
      upgraded(id);
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
    var idea = {title: data.title, content: data.content, obj_backers: data.obj_backers, owner: ownerObj, members: [this.userId]};
    var exist = Idea.findOne( {title: idea.title })
    if (!exist)
      Idea.insert(idea);
  },
  updateIdea: function(data, ideaId) {
    Idea.update(ideaId, {$set: {title: data.title, content: data.content}});
  },
  removeIdea: function(ideaId) {
    Idea.remove(ideaId);
  }
});
