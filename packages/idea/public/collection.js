Idea = new Mongo.Collection('idea');

AuthorSchema = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
});

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
    type: AuthorSchema
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

Idea.attachSchema(IdeaSchema);
