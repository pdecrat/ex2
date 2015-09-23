Accounts.onCreateUser(function(options, user) {
  var character = {
    experience: 0,
    level: 0,
    class: "",
    credits: 10
  };
   user.profile = options.profile;
   user.roles = [];
   user.character = character;
   user.notification = [];
   if (Meteor.users.find().count() == 0){
     user.roles.push('admin');
     user.character.credits = 9001;
  }
  project = Project.findOne({ title: "Mes premiers pas avec Collectivz"});
  var member = {};
  member.id = user._id;
  member.username = user.username;
  Project.update(project._id, { $addToSet: {members: member}});

  return user;
});
