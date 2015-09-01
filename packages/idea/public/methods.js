Meteor.methods({
   upvote: function(ideasId) {

    var ideas = Idea.findOne(ideasId);
    if (_.include(ideas.members, this.userId))
      return false;
    Idea.update(ideas._id, {
      $addToSet: {members: this.userId},
      $inc: {votes: 1}
    });
    ideas = Idea.findOne(ideasId);
    if (ideas.votes >= ideas.obj_backers)
      Meteor.call('upgrated', ideasId);
  },
   upgrated: function(ideasId) {
    var ideas = Idea.findOne(ideasId);
    project = {title: ideas.title, content: ideas.content, author: ideas.author, members: ideas.members};
    projectID = Project.insert(project);
    Idea.remove(ideasId);
  },
  insertIdea: function (data) {
    var idea = {title: data.title, content: data.content, obj_backers: 1, author: this.userId};
    Idea.insert(idea);
  }
});
