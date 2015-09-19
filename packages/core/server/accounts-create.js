Accounts.onCreateUser(function(options, user) {
  var character = {
    experience: 0,
    level: 0,
    class: "",
    gold: 10
  };
   user.profile = options.profile;
   user.roles = [];
   user.character = character;
   user.notification = [];
   if (Meteor.users.find().count() == 0){
     user.roles.push('admin');
  }
  project = Project.findOne({ title: "Mes premiers pas avec Collectivz"});
  var members = {};
  members.id = user._id;
  members.username = user.username;
  Project.update(project._id, { $addToSet: {members: members}});

  return user;
});
