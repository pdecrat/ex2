Wall = new Mongo.Collection('wall');

owner = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
})

Posts = new SimpleSchema({
    owner: {
      type: owner
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
