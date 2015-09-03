Idea = new Mongo.Collection('idea');

IdeaSchema = new SimpleSchema([Schemas.public, {
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
}]);

Idea.attachSchema(IdeaSchema);
