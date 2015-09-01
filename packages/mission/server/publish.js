Meteor.publish("mission", function (params) {
  if (params.action == 'list')
    return Mission.find();
  return Mission.find({ _id: params.id });
})


Mission.before.insert(function (userId, doc) {
    if (doc.project !== undefined && doc.project !== null) {
      Project.update({_id: doc.project}, {$set: {missions: [doc._id]}});
    }
    console.log("ici");
    doc.creator = Meteor.userId();
    doc.finish = false;
    console.log("ici");
});


Mission.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
      currentUser = Meteor.user();
      if (Meteor.users.findOne(userId).fetch().length == 1)
        return true;
      console.log("forbidden update : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
    },
  remove: function (userId, doc) {
     currentUser = Meteor.user();
      if (currentUser.profile.role === 'mastermind')
        return true;
      console.log("forbidden delete : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
  }
});

Meteor.methods({
  finish: function(missionId) {
    var mission = Mission.findOne(missionId);
    if (Meteor.userId() === mission.creator)
    {
      Mission.update(missionId, {
        $set: {finish: true}
      });
      Meteor.call('gainXp', missionId);
    }
  },
  register: function(missionId) {
    var mission = Mission.findOne(missionId);
    if (!_.include(this.members, Meteor.userId()))
    {
      Mission.update(missionId, {
        $addToSet: {members: Meteor.userId()}
      });
    }
  },
  gainXp: function(missionId) {
    mission = Mission.findOne(missionId);
    creator = Meteor.users.findOne(mission.creator);
    Characters.update(creator.profile.character, {$inc: {xp: +25}});
    for (var i = 0; i < mission.members.length; i++)
    {
      user = Meteor.users.findOne(mission.members[i]);
      Characters.update(user.profile.character, {$inc: {xp: +100}});
    }
  }

});

Mission.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post'};
  var wall = {key: this._id, from: "mission", posts: [post]};
  Walls.insert(wall);
  wall = Walls.findOne({key: this._id});
  Mission.update(this._id, {
    $set: {wall: wall._id}
  })
});
