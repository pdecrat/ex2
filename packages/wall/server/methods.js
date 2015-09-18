Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne({key: wallId});
    if (wall.from === 'project')
    {
      project = Project.findOne(wall.key);
      check = _.some( project.members, function( el ) {
        return el.id === userId;
      } );
      if (check)
        Wall.update(wall._id, { $addToSet: {posts: doc} });
    }
    else if (wall.from === 'idea')
    {
      idea = Idea.findOne(wall.key);
      check = _.contains( idea.members, userId);
      if (check)
        Wall.update(wall._id, { $addToSet: {posts: doc} });
    }
    else if (wall.from === 'mission')
    {
      mission = Mission.findOne(wall.key);
      if (!_.include(mission.members, userId))
          return false;
      Wall.update(wall._id, {
        $addToSet: {posts: doc},
      });
    }
  }
});
