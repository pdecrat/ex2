Wall = new Mongo.Collection('wall');

Wall.postSchema = new SimpleSchema({
    inCharge: {
      type: [String]
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
  attachedTo: {
    type: Object,
    blackbox: true
  },
  posts: {
    type: [Wall.postSchema],
    blackbox: true,
    optional: true
  }
});
