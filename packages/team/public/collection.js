Team = new Mongo.Collection('teams');

TeamSchema = new SimpleSchema({
  name: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    unique: true
  },
  description: {
    type: String
  },
  members: {
    type: [Schemas.user]
  },
  wall : {
    type: String,
    optional: true
  }
});
