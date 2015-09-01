Meteor.publish("idea", function (params) {
  if (params.action == 'list')
    return Idea.find();
  return Idea.find({ _id: params.id });
})

Idea.allow({
  insert: function (userId, doc) {
                return true;

    },
  update: function (userId, doc) {
        return true;
    },
  remove: function (userId, doc) {
      return true;
  }
});

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
    check(this.userId, String);
    check(ideasId, String);

    var ideas = Idea.findOne(ideasId);
    project = {title: ideas.title, content: ideas.content, author: ideas.author, members: ideas.members};
    projectID = Project.insert(project);
    // Walls.update(ideas.wall, {
    //     $set: {
    //       key: projectID,
    //       from: "project"
    //     }
    // });
    // Collectivz.utils.makeEvent("Projet créé", "L'idée " + project.title + " vient de devenir un projet.", ideas.members);
    Idea.remove(ideasId);
  }
});
//
// Idea.after.insert(function () {
//   var post = {username: "Collectivz", content: 'content du post'};
//   var wall = {key: this._id, from: "idea", posts: [post]};
//   Walls.insert(wall);
//   wall = Walls.findOne({key: this._id});
//   Idea.update(this._id, {
//     $set: {wall: wall._id}
//   })
// });
