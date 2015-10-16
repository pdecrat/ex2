Election = new Mongo.Collection('election');

Members = new SimpleSchema({
    id: {
      type: String
    },
    remainingVote: {
       type: Number
    },
    voted: {
      type: Number
    },
    program: {
      type: String,
      optional: true
    }
});

ElectionSchema = new SimpleSchema({
  members: {
    type: [Members]
  },
  votes: {
    type: Number,
    optional: true
  },
  createdAt: {
    type: Date
  },
  project: {
    type: String,
    optional: true
  }
});
