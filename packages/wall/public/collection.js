// Write your package code here!
Wall = new Mongo.Collection('wall');

Posts = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    content: {
        type: String
    }
});

// Define the schema
WallSchema = new SimpleSchema({
  key: {
    type: String
  },
  from: {
    type: String,
    allowedValues: ['idea', 'project', 'team', 'mission'],
    optional: true
  },
  posts: {
    type: [Posts],
    optional: true
  }
});

Wall.attachSchema(WallSchema);
