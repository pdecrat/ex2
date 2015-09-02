Meteor.publish("wall", function (key) {
    return Wall.find({key: key});
});

Wall.allow({
  insert: function (key, doc) {
      console.log(doc);
      return true;
    },
  update: function (wallId, doc) {
    console.log(doc);
    wall = Wall.findOne(wallId);
    console.log(wall);
    console.log("test");
    return true;
  },
  remove: function (doc) {
    return true;
  }
});


Meteor.methods({
   insertPost: function(userId, wallId, doc) {
    wall = Wall.findOne(wallId);
    if (wall.from === 'idea')
    {
      Walls.update(wall._id, {
      $addToSet: {posts: doc},
      });
    }
    else if (wall.from === 'project')
    {
      obj = Projects.findOne(wall.key);
      if (_.include(obj.members, userId))
      {
        Walls.update(wall._id, {
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
        Walls.update(wall._id, {
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
