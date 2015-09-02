Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne({key: wallId});
    if (wall.from === 'project')
    {
      obj = Project.findOne(wall.key);
      if (!_.include(obj.members, userId))
          return false;
    }
    else if (wall.from === 'team')
    {
      obj = Teams.findOne(wall.key);
      if (!_.include(obj.members.key, userId))
        return false;
    }
    else if (wall.from === 'mission')
    {
      obj = Teams.findOne(wall.key);
      if (!_.include(obj.members.key, userId))
          return false;
    }
    Wall.update(wall._id, {
      $addToSet: {posts: doc},
    });
    }
});
