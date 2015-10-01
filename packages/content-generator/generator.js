Generator = {};

Generator.generateIdea = function(user) {
  var idea = {
    name: Fake.sentence(3),
    description: Fake.paragraph(6),
    obj_backers: Math.floor((Math.random() * 100) + 1),
    type: 'Idea',
    credits: 0
  }

  idea.members = [user.username];
  idea.inCharge = [user.username];
  idea.templates = [
    {name: 'View', templates: 'IdeaView'},
    {name: 'Update', templates: 'IdeaUpdate'},
    {name: 'Comment', templates: 'Wall'},
    {name: 'Survey', templates: 'Survey'},
  ]
  Actions.create(idea);
}

Generator.generatePost = function(user, idea) {
  var post = Fake.paragraph(2);

  Actions.post(user, idea, {post: post});
}
