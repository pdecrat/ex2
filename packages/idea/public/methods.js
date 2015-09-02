var upgraded = function(id) {
  var idea = Idea.findOne(id);
  project = {title: idea.title, content: idea.content, author: idea.author, members: idea.members};
  projectID = Project.insert(project);
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
      if (Meteor.isClient)
        Errors.throw('Login noob');
      return;
    }
    if (Meteor.isClient && (data.content === "" || data.title === "" ))
        return ;
    var idea = {title: data.title, content: data.content, obj_backers: 1, author: this.userId};
    var exist = Idea.findOne( {title: idea.title })
    if (Meteor.isClient && exist !== undefined )
      Errors.throw('Duplicate title');
    else if (Meteor.isServer && exist === undefined)
      Idea.insert(idea);
  },
  updateIdea: function(data, ideaId) {
    Idea.update(ideaId, {$set: {title: data.title, content: data.content}});
  }
});
