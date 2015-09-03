var getRicher = function(id, gold, xp) {
  Meteor.users.update(id, { "$inc": {
       "character.experience": xp,
       "character.gold": gold }});
}

Meteor.methods({
  insertMission: function (data) {
    if (!this.userId) {
      FlowRouter.go('/login');
      if (Meteor.isClient)
        Errors.throw('Login noob');
      return;
    }
    if (Meteor.isClient && (data.content === "" || data.title === "")) {
      Errors.throw('Tout les champs doivent être renseignés');
      return ;
    }

    var ownerObj = {
      id: this.userId,
      username: Meteor.users.findOne( {_id: this.userId }).username
    }
    var mission = {
      title: data.title,
      content: data.content,
      missionType: data.missionType,
      project: data.project,
      owner: ownerObj
    };
    if (Meteor.isServer)
      Mission.insert(mission);
  },
  finish: function(missionId) {
    var mission = Mission.findOne(missionId);
    if (Meteor.userId() === mission.owner.id)
    {
        Mission.update(missionId, { $set: {finish: true} });
        if (mission.type !== "vote") {
          getRicher(mission.owner.id, 1, 25);
        }
        mission.members.forEach(function(id) { getRicher(id, 4, 100)});
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
  voteCoordinateur: function(missionId, members) {
    console.log("test vote coordinateur");
    console.log(missionId);
    mission = Mission.findOne(missionId);
  }
});
