Mission = new Mongo.Collection('mission');

MissionSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  },
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
  wall: {
      type: String,
      optional: true
  },
  finish: {
      type: Boolean,
      optional: true
  }
});
