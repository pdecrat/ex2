Generator = {};

Generator.generateIdea = function(user) {
  var idea = {
    title: Fake.sentence(3),
    content: Fake.paragraph(6),
    obj_backers: Math.floor((Math.random() * 100) + 1),
    type: 'Idea',
    credits: 0
  }

  idea.members = [user.username];
  idea.inCharge = [user.username];
  Actions.create(idea);
}

Generator.generatePost = function(user, idea) {
  var post = Fake.paragraph(2);

  Actions.post(user, idea, {post: post});
}
