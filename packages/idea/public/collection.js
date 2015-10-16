Idea = new Mongo.Collection('idea');

UserSchema = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
});

IdeaSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  obj_backers: {
    type: Number
  },
  members: {
      type: [UserSchema],
      blackbox: true,
      optional: true
  },
  canvas: {
    type: String,
    optional: true
  }
});
