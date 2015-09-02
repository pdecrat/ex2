Idea = new Mongo.Collection('idea');

IdeaSchema = new SimpleSchema({
  title: {
    type: String,
    unique: true
  },
  content: {
    type: String
  },
  obj_backers: {
    type: Number
  },
  author: {
    type: String,
    optional: true
  },
  members: {
      type: [String],
      optional: true
  },
  votes: {
      type: Number,
      optional: true
  }
});

Idea.before.insert(function(userId, doc) {
  doc.author = userId;
})

Idea.attachSchema(IdeaSchema);
