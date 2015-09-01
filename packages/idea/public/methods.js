var upgraded = function(id) {
  var idea = Idea.findOne(id);
  project = {title: idea.title, content: idea.content, author: idea.author, members: idea.members};
  projectID = Project.insert(project);
  Idea.remove(id);
}

Meteor.methods({
   upvote: function(id) {
    var ideas = Idea.findOne(id);
    if (_.include(ideas.members, this.userId))
      return false;
    Idea.update(ideas._id, {
      $addToSet: {members: this.userId},
      $inc: {votes: 1}
    });
    ideas = Idea.findOne(id);
    if (ideas.votes >= ideas.obj_backers)
      upgraded(id);
  },
  insertIdea: function (data) {
    var idea = {title: data.title, content: data.content, obj_backers: 1, author: this.userId};
    Idea.insert(idea);
  }
});
