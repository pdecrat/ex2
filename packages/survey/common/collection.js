Survey = new Mongo.Collection('survey');

Proposal = new SimpleSchema({
    name: {
      type: String
    },
    voted: {
      type: Number
    }
});

SurveySchema = new SimpleSchema({
  title: {
    type: String
  },
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
