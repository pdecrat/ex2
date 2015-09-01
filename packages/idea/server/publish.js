Meteor.publish("idea", function (params) {
  if (params.action == 'list')
    return Idea.find();
  return Idea.find({ _id: params.id });
})

Idea.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
