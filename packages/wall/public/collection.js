Wall = new Mongo.Collection('wall');

Wall.ownerSchema = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
})

Wall.postSchema = new SimpleSchema({
    owner: {
      type: Wall.ownerSchema
    },
    content: {
        type: String
    },
    createdAt: {
      type: Date
    }
});

// Define the schema
Wall.wallSchema = new SimpleSchema({
  key: {
    type: String
  },
  from: {
    type: String,
    allowedValues: ['idea', 'project', 'team', 'mission', 'election'],
    optional: true
  },
  posts: {
    type: [Wall.postSchema],
    blackbox: true,
    optional: true
  }
});
