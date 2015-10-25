/*
** Init database on startup
*/

Meteor.startup(function() {

   // Add 4 users on start up if there's none in the database

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

   // Generate Idea (and related post content) on start up if there's none
  //
  // if (Idea.find().count() === 0) {
  //   var users = Meteor.users.find().fetch();
  //
  //   users.forEach(function(user) {
  //     for (var i = 10; i > 0; i--) {
  //         Generator.generateIdea(user);
  //       }
  //   })
  //
  //   var ideas = Idea.find().fetch();
  //
  //   users.forEach(function(user) {
  //     ideas.forEach(function(idea) {
  //       for (var i = 10; i > 0; i--) {
  //           Generator.generatePost(user, idea);
  //         }
  //     })
  //   })
  // }

  // Generate missions for "Mes premiers avec Collectivz" on startup

  if (Mission.find().count() == 0)
  {
    project = Project.findOne({ title: "Mes premiers pas avec Collectivz"});
    projectId = project._id;
    mission = {
      title: "Commenter une idée",
      content: "Pour commencer pourquoi ne pas examiner les idées proposées par d'autres participants et donner votre avis?",
      project: projectId
    },
    Mission.insert(mission);
    mission = {
      title: "Remplir mon profil",
      content: "Remplir votre profil permet de vous donner plus de visibilité et d'identifier les projets qui peuvent vous convenir le mieux!",
      project: projectId
    },
    Mission.insert(mission);
    mission = {
      title: "Publier une idée",
      content: "En publiant une idée, vous pouvez trouver d'autres membres qui vont vous aider à la transformer en réalité!",
      project: projectId
    },
    Mission.insert(mission);
    mission = {
      title: "Rejoindre un projet",
      content: "Rejoingnez un projet et changez le Monde avec une communauté de gens qui partagent vos intérêts!",
      project: projectId
    },
    Mission.insert(mission);
  }

})
