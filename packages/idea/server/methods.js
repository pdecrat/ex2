// var upgraded = function(id) {
//   var idea = Idea.findOne(id);
//   var members = [];
//
//   idea.members.forEach(function(element) {
//     var memberElection = {};
//     memberElection.id = element.id;
//     memberElection.username = element.username;
//     memberElection.remainingVote = 3;
//     memberElection.voted = 0;
//     members.push(memberElection);
//   });
//
//   project = {title: idea.title, content: idea.content, owner: idea.owner, members: idea.members};
//   projectId = Project.insert(project);
//   var election = {
//     votes: 0,
//     members: members,
//     project: projectId,
//     createdAt: new Date()
//   };
//
//   electionId = Election.insert(election);
//   var wall = {key: electionId, from: "election"};
//   Wall.insert(wall);

  // Notif.addNotification(idea.members, {
  //   content: "Un nouveau projet est né : ",
  //   title: idea.title,
  //   fromType: "project",
  //   projectId: projectId
  // })
//   wall = Wall.findOne({key: id});
//   Wall.update(wall, {
//     $set: {
//       key: projectId,
//       from: "project"
//       }
//   });
//   Idea.remove(id);
// }


Meteor.methods({
  insertIdea: function (data) {

    var exist = Idea.findOne( {name: data.name });
    var user = Meteor.users.findOne({_id: this.userId});

    if (!this.userId) {
     FlowRouter.go('/Login');
     return;
    }
    if (!exist){
      data.members = [user.username];
      data.inCharge = [user.username];
      data.templates = [
        {name: 'View', templates: 'IdeaView'},
        {name: 'Update', templates: 'IdeaUpdate'},
        {name: 'Comment', templates: 'Wall'},
        {name: 'Survey', templates: 'Survey'},
      ]
      Actions.create(data);
    }
    console.log(data)
  },
  updateIdea: function(data, ideaId) {
    Idea.update(ideaId, {$set: {title: data.title, content: data.content}});
  },
  removeIdea: function(ideaId) {
    Idea.remove(ideaId);
  },
  giveCredits: function(target) {
    var user = Meteor.user();
    var actions = [
      {name: 'giveCredits', params: {cost: 1}},
      {name: 'getXp', params: {xp: 10}},
    ];

    Actions.do(user, actions, target);
  },
  becomeMember: function(target) {
    var user = Meteor.user();
    var actions = [
      {name: 'giveCredits', params: {cost: 5}},
      {name: 'getXp', params: {xp: 250}},
      {name: 'becomeMember'},
      {name: 'notifyMembers', params: {
        message: user.username + " est devenu membre."}}
    ];

    Actions.do(user, actions, target);
  }
});
