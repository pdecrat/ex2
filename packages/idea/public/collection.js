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
    type: Schemas.author
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
