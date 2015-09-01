Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   user.profile.firstName = options.firstName;
   user.profile.lastName = options.lastName;
   user.roles = [];
   if (Meteor.users.find().count() == 0)
     user.roles.push('admin');
   return user;
});
