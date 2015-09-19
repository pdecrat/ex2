Activity = new Mongo.Collection('activity');

Activity.objScheam = new SimpleSchema({
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
  show: {
    type: Boolean,
    optional: true
  },
  notify: {
    type: Boolean,
    optional: true
  }
});

Activity.activitySchema = new SimpleSchema({
  userId: {
    type: String,
  },
  activiy: {
    type: [Activity.objSchema],
    blackbox: true,
    optional: true
  }
});
