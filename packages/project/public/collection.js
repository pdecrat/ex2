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
  author: {
    type: Schemas.author
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
