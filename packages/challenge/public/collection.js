Challenge = new Mongo.Collection('challenge');

ChallengeSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  key: {
    type: String,
    optional: true
  },
  from: {
    type: String,
    allowedValues: ['Mission', 'Project', 'User'],
    autoform: {
      options: {
        Mission: "Mission",
        Project: "Project",
        User: "User"
      }
    }
  }
});
