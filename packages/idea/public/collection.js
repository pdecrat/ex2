Idea = new Mongo.Collection('idea');

IdeaSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  owner: {
    type: Schemas.owner
  },
  obj_backers: {
    type: Number
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
