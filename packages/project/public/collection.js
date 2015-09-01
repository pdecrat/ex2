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
    type: String
  },
  members: {
      type: [String],
      optional:true
  },
  coordinateurs: {
      type: [String],
      optional: true
  },
  missions: {
    type: [String],
    optional: true
  }
    // backersGoal: {
  //   type: Number,
  //   label: "Number of backers needed",
  //   min: 0
  // },
  // lastCheckedOut: {
  //   type: Date,
  //   label: "Last date this Idea was checked out",
  //   optional: true
  // },
  // summary: {
  //   type: String,
  //   label: "Brief summary",
  //   optional: true,
  //   max: 1000
  // }
});

// Validate an object against the schema
// obj = {title: "Ulysses", author: "James Joyce"};

Project.attachSchema(ProjectSchema);
