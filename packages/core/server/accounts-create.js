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
   if (Meteor.users.find().count() == 0){
     var token = Roles.token;

     token.admin = true;
     user.roles.push(token);
  }
  return user;
});
