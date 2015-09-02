// Write your package code here!
Wall = new Mongo.Collection('wall');

Posts = new SimpleSchema({
    author: {
      type: Schemas.author
    },
    content: {
        type: String
    },
    createdAt: {
      type: Date
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
    blackbox: true,
    optional: true
  }
});

Wall.attachSchema(WallSchema);
