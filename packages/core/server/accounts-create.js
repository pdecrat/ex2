Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   user.profile.firstName = options.firstName;
   user.profile.lastName = options.lastName;
   user.roles = [];
   user.gold = 10;
   user.experience = 0;
   user.level = 0;
   user.classe = "";
   console.log("a la creation de user");
   if (Meteor.users.find().count() == 0)
     user.roles.push('admin');
   return user;
});
