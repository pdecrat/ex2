Idea = new Mongo.Collection('idea');

IdeaSchema = new SimpleSchema([Schemas.public, {
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
}]);

Idea.attachSchema(IdeaSchema);
