var upgraded = function(id) {
  var idea = Idea.findOne(id);
  project = {title: idea.title, content: idea.content, author: idea.author, members: idea.members};
  projectID = Project.insert(project);
  Idea.remove(id);
}

Meteor.methods({
   upvote: function(id) {
    var idea = Idea.findOne(id);
    if (_.include(ideas.members, this.userId))
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
    if (!this.userId && Meteor.isClient) {
      Errors.throw('You must be logged in to create an idea.');
      FlowRouter.go('/login');
    }
    console.log(this.username)
    var idea = {title: data.title, content: data.content, obj_backers: 1, author: this.userId};
    Idea.insert(idea);
  },
  updateIdea: function(data, ideaId) {
    Idea.update(ideaId, {$set: {title: data.title, content: data.content}});
  }
});
