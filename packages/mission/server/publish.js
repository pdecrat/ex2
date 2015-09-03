Meteor.publish("mission", function (params) {
  if (params) {
    if (params._id)
      return Mission.find({_id: params._id});
    return Mission.find({project: params.key});
  }
})

Mission.before.insert(function (userId, doc) {
    doc.owner = Meteor.userId();
    doc.finish = false;
});


Mission.allow({
  insert: function (userId, doc) {
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
     currentUser = Meteor.user();
      if (currentUser.profile.role === 'mastermind')
        return true;
      console.log("forbidden delete : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
  }
});
