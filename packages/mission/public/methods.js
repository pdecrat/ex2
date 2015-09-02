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
    Meteor.users.update(mission.creator, {
      $inc: {experience: +25},
      $inc: {gold: +1}
    });
    //Characters.update(creator.profile.character, {$inc: {xp: +25}});
    for (var i = 0; i < mission.members.length; i++)
    {
      Meteor.users.update(mission.members[i], {
        $inc: {experience: +100},
        $inc: {gold: +4}
    });
    //  user = Meteor.users.findOne(mission.members[i]);
    //  Characters.update(user.profile.character, {$inc: {xp: +100}});
    }
  }
});
