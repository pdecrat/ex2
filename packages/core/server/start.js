Meteor.startup(function() {
  if (Idea.find().count() === 0) {
    var users = Meteor.users.find().fetch();

    users.forEach(function(user) {
      for (var i = 100; i > 0; i--) {
          Generator.generateIdea(user);
        }
    })

    var ideas = Idea.find().fetch();
    
    users.forEach(function(user) {
      ideas.forEach(function(idea) {
        for (var i = 10; i > 0; i--) {
            Generator.generatePost(user, idea);
          }
      })
    })
  }
})
