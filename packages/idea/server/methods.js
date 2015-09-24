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
    if (!this.userId) {
      FlowRouter.go('/login');
      return;
    }
    // var idea = {type: data.type, canvas: data.canvas, title: data.title, content: data.content, obj_backers: data.obj_backers, owner: ownerObj, members: [ownerObj]};
    var exist = Idea.findOne( {title: data.title })
    if (!exist){
      var newId = new Mongo.ObjectID();

      data.members = [this.userId];
      data.inCharge = [this.userId];
      data._id = newId._str;
      data.url = '/' + data.type + '/view/' + data._id;
      ideaId = Idea.insert(data);
      var wall = {key: ideaId, from: "idea"};
      Wall.insert(wall);
      // upvote(this.userId, ideaId);
    }
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
      {name: 'giveCredits', params: {amount: 1}},
      {name: 'getXp', params: {xp: 10}},
      {name: 'notifyInCharge', params: {
        message: user.username + " à supporté l'idée."}}
    ];

    Actions.do(user, actions, target);
  },
  becomeMember: function(target) {
    var user = Meteor.user();
    var actions = [
      {name: 'giveCredits', params: {amount: 5}},
      {name: 'getXp', params: {xp: 250}},
      {name: 'becomeMember'},
      {name: 'notifyMembers', params: {
        message: user.username + " est devenu membre."}}
    ];

    Actions.do(user, actions, target);
  }
});
