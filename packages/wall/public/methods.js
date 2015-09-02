Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne({key: wallId});
    if (wall.from === 'idea')
    {
      Wall.update(wall._id, {
      $addToSet: {posts: doc},
      });
    }
    else if (wall.from === 'project')
    {
      obj = Project.findOne(wall.key);
      if (_.include(obj.members, userId))
      {
        Wall.update(wall._id, {
        $addToSet: {posts: doc},
        });
      }
    }
    else if (wall.from === 'team')
    {
 //     obj = Teams.findOne(wall.key);
   //   if (_.include(obj.members.key, userId))
 //     {
        Wall.update(wall._id, {
        $addToSet: {posts: doc},
        });
 //     }
    }
    else if (wall.from === 'mission')
    {
 //     obj = Teams.findOne(wall.key);
   //   if (_.include(obj.members.key, userId))
 //     {
        Wall.update(wall._id, {
        $addToSet: {posts: doc},
        });
 //     }
    }
    else
      return false;
//
 //   var ideas = Ideas.findOne(ideasId);
   // if (_.include(ideas.members, this.userId))
     // return false;
//
  //
    //ideas = Ideas.findOne(ideasId);
    //if (ideas.votes >= ideas.obj_backers)
    //  Meteor.call('upgrated', ideasId);
  }
});
