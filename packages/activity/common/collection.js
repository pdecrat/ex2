Activity = new Mongo.Collection('activity');

Activity.activitySchema = new SimpleSchema({

  title: {
    type: Number,
  },
  content: {
    type: Date
  },
  url: {
    type: String,
    optional: true
  },
  hide: {
    type: Boolean,
    optional: true
  },
  notify: {
    type: Boolean,
    optional: true
  }
});
