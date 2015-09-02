Meteor.publish("wall", function (params) {
    return Wall.find({key: params.key});
});

Wall.allow({
  insert: function (key, doc) {
      return true;
    },
  update: function (wallId, doc) {
    wall = Wall.findOne(wallId);
    return true;
  },
  remove: function (doc) {
    return true;
  }
});
