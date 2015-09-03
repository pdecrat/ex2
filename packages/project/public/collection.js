// Write your package code here!
Project = new Mongo.Collection('project');

Members = new SimpleSchema({
    id: {
      type: String
    },
    remainingVote: {
       type: Number
    },
    voted: {
      type: Number
    }
});

// Define the schema
ProjectSchema = new SimpleSchema([Schemas.public, {
  members: {
      type: [Members],
      optional: true,
      blackbox: true
  },
  coordinateurs: {
      type: [String],
      optional: true
  }
}]);

Project.attachSchema(ProjectSchema);
