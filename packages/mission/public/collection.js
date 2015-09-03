// Write your package code here!
Mission = new Mongo.Collection('mission');

// Define the schema
MissionSchema = new SimpleSchema([Schemas.public, {
  members: {
    type: [String],
    optional: true
  },
  team: {
    type: String,
    optional: true
  },
  project: {
    type: String,
    optional: true
  },
  missionType: {
    type: String,
    allowedValues: ['Mission', 'Challenge'],
    autoform: {
      options: {
        Mission: "Mission",
        Challenge: "Challenge"
      }
    }
  },
  wall: {
      type: String,
      optional: true
  },
  finish: {
      type: Boolean,
      optional: true
  },
  creator: {
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
}]);

// Validate an object against the schema
// obj = {title: "Ulysses", author: "James Joyce"};

Mission.attachSchema(MissionSchema);
