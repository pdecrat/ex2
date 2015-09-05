Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne({key: wallId});
    if (wall.from === 'project')
    {
      project = Project.findOne(wall.key);
      check = _.some( project.members, function( el ) {
        return el.id === "fzezev";
      } );
      if (check) {
        Wall.update(wall._id, {
          $addToSet: {posts: doc},
        });
      }
    }
/*    else if (wall.from === 'team')
    {
      team = Teams.findOne(wall.key);
      if (!_.include(team.members.key, userId))
        return false;
    }*/
    else if (wall.from === 'mission')
    {
      mission = Mission.findOne(wall.key);
      if (!_.include(mission.members, userId))
          return false;
    }
    Wall.update(wall._id, {
      $addToSet: {posts: doc},
    });
    }
});
