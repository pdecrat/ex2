Meteor.publish("user", function (params) {
  if (params && params.action == 'list') {
    return Meteor.users.find();
  }
  return Meteor.users.find({ _id: this.userId },
			{	fields: {
					emails: 1,
					username: 1,
					profile: 1,
					roles: 1,
					character: 1,
          notification: 1
				}}
      );
});

Meteor.publish("activity", function (params) {
  if (this.userId)
    return Activity.find({ userId: this.userId });
});


if (Meteor.users.find().count() == 0)
{
  Accounts.createUser(
  {
    email : 'mastermind@mastermind.com',
    username: 'mastermind',
    password : 'mastermind',
		profile: {
			firstName: 'master',
			lastName: 'mind'
		}
	  });

  Accounts.createUser(
  {
    email : 'dummy@dummy.com',
    username: 'dummy',
    password : 'dummy',
		profile: {
			firstName: 'dum',
			lastName: 'my'
		}
	});

  Accounts.createUser(
  {
    email : 'dummya@dummy.com',
    username: 'dummya',
    password : 'dummya',
		profile: {
			firstName: 'dum',
			lastName: 'mya'
		}
	});

  Accounts.createUser(
  {
    email : 'dummyb@dummy.com',
    username: 'dummyb',
    password : 'dummyb',
		profile: {
			firstName: 'dum',
			lastName: 'myb'
		}
	});
}
