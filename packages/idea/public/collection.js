// Write your package code here!
Idea = new Mongo.Collection('idea');
// Define the schema

IdeaSchema = new SimpleSchema({
  title: {
    type: String,
    unique: true
  },
  content: {
    type: String
  },
  obj_backers: {
    type: Number
  },
  author: {
    type: String,
    optional: true
  },
  members: {
      type: [String],
      optional: true
  },
  votes: {
      type: Number,
      optional: true
  }
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
//
Idea.before.insert(function(userId, doc) {
  doc.author = userId;
})

Idea.attachSchema(IdeaSchema);
