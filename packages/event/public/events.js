// Write your package code here!
Events = new Mongo.Collection('events');

// Define the schema
EventSchema = new SimpleSchema({
  eventType: {
    type: String,
    allowedValues: ['activity', 'reward', 'badge', 'levelup'],
    optional: true
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  createdAt: {
      type: Date,
      optional: true
  },
  userId: {
    type: String,
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

Events.attachSchema(EventSchema);
