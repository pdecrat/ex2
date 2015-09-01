Meteor.publish("character", function () {
    return Characters.find({});
});

Characters.allow({
  insert: function (doc) {
      return true;
    },
  update: function (characterId, doc) {
    return true;
  },
  remove: function (doc) {
    return true;
  }
});