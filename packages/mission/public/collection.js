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
    allowedValues: ['Mission', 'Challenge', 'Vote'],
    autoform: {
      options: {
        Mission: "Mission",
        Challenge: "Challenge",
        Vote: "Vote"
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
  }
}]);

// Validate an object against the schema
// obj = {title: "Ulysses", owner: "James Joyce"};

Mission.attachSchema(MissionSchema);
