Survey = new Mongo.Collection('survey');

Proposal = new SimpleSchema({
    proposal: {
      type: String
    },
    voted: {
      type: Number
    }
});

SurveySchema = new SimpleSchema({
  members: {
    type: [String]
  },
  proposal: {
    type: [Proposal],
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
