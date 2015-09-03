Meteor.publish("user", function (params) {
		if (params.action == 'list')
			return Meteor.users.find();
    return Meteor.users.find({ _id: params.id },
			{	fields: {
					emails: 1,
					username: 1,
					profile: 1,
					roles: 1,
					gold: 1,
					experience: 1,
					level: 1,
					classe: 1
				}
		});
});

if (Meteor.users.find().count() == 0)
{
  Accounts.createUser(
  {
    email : 'mastermind@mastermind.com',
    username: 'mastermind',
    password : 'mastermind'
	  });

  Accounts.createUser(
  {
    email : 'dummy@dummy.com',
    username: 'dummy',
    password : 'dummy'
	});

}


// Meteor.users.before.insert(function (userId, doc) {
//   doc.profile.role = "user";
//   doc.profile.templates = ['profile'];
// });
//
// Meteor.users.after.insert(function () {
//   var charac = {userID: this._id, gold: 10, xp: 0, lvl: 1};
//   characterID = Characters.insert(charac);
//   Meteor.users.update(this._id, {
//     $set: {"profile.character": characterID}
//   });
// })
