// Write your package code here!
Project = new Mongo.Collection('project');

// Define the schema
ProjectSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  owner: {
    type: Schemas.owner
  },
  members: {
      type: [String],
      optional:true
  },
  coordinateurs: {
      type: [String],
      optional: true
  }
});

Project.attachSchema(ProjectSchema);
