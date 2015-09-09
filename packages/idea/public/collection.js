Idea = new Mongo.Collection('idea');

IdeaSchema = new SimpleSchema([Schemas.public, {
  obj_backers: {
    type: Number
  },
  members: {
      type: [Schemas.user],
      optional: true
  },
  votes: {
      type: Number,
      optional: true
  },
  canvas: {
    type: String,
    optional: true
  }
}]);

Idea.attachSchema(IdeaSchema);
