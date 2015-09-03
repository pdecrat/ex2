Meteor.publish("project", function (params) {
  if (params.action == 'list')
    return Project.find();
  return Project.find({ _id: params.id });
})

Project.allow({
  insert: function (doc) {
      console.log("insertion de project");
      return true;
    },
  update: function (userId, doc) {
      currentUser = Meteor.user();
      if (Meteor.users.findOne(userId).fetch().length == 1)
        return true;
      console.log("forbidden update : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
    },
  remove: function (userId, doc) {
        return true;
      console.log("forbidden delete : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
  }
});
