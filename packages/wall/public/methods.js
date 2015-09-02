Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne({key: wallId});
    if (wall.from === 'project')
    {
      project = Project.findOne(wall.key);
      if (!_.include(project.members, userId))
          return false;
    }
    else if (wall.from === 'team')
    {
      team = Teams.findOne(wall.key);
      if (!_.include(team.members.key, userId))
        return false;
    }
    else if (wall.from === 'mission')
    {
      team = Teams.findOne(wall.key);
      if (!_.include(team.members.key, userId))
          return false;
    }
    Wall.update(wall._id, {
      $addToSet: {posts: doc},
    });
    }
});
