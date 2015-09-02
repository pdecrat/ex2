Meteor.publish("wall", function (params) {
    return Wall.find({key: params.key});
});

Wall.allow({
  insert: function (key, doc) {
      return true;
    },
  update: function (wallId, doc) {
    console.log(doc);
    wall = Wall.findOne(wallId);
    console.log(wall);
    console.log("test");
    return true;
  },
  remove: function (doc) {
    return true;
  }
});
