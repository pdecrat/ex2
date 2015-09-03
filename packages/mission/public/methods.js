

Meteor.methods({
  finish: function(missionId) {
    var mission = Mission.findOne(missionId);
    if (Meteor.userId() === mission.owner.id)
    {
        Mission.update(missionId, { $set: {finish: true} });
        if (mission.type !== "vote") {
          Meteor.users.update(mission.owner.id, { "$inc": {
               "character.experience": +25,
               "character.gold": +1 }});
        }
        for (var i = 0; i < mission.members.length; i++)
        {
          Meteor.users.update(mission.members[i], { "$inc": {
               "character.experience": +100,
               "character.gold": +4 }});
        }
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
  }
  // gainXp: function(missionId) {
  //   mission = Mission.findOne(missionId);
  //   if (mission.missionType !== "Vote")
  //   {
  //     owner = Meteor.users.findOne(mission.owner.id);
  //     Meteor.users.update(mission.owner.id, {
  //       $inc: {experience: +25},
  //       $inc: {gold: +1}
  //     });
  //   }
  //   //Characters.update(owner.profile.character, {$inc: {xp: +25}});
  //   for (var i = 0; i < mission.members.length; i++)
  //   {
  //     console.log(mission.members[i]);
  //     Meteor.users.update(mission.members[i], {
  //       $inc: {experience: +100},
  //       $inc: {gold: +4}
  //   });
  //   //  user = Meteor.users.findOne(mission.members[i]);
  //   //  Characters.update(user.profile.character, {$inc: {xp: +100}});
  //   }
  // }
});
