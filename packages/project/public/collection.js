Project = new Mongo.Collection('project');

Members = new SimpleSchema({
    id: {
      type: String
    },
    username: {
       type: String
    }
});

ProjectSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  members: {
      type: [Members],
      optional: true,
      blackbox: true
  },
  coordinateurs: {
      type: [String],
      optional: true
  }
});
