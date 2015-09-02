Meteor.publish("mission", function (params) {
  if (params.action == 'list')
    return Mission.find();
  return Mission.find({ _id: params.id });
})

Mission.before.insert(function (userId, doc) {
    if (doc.project !== undefined && doc.project !== null) {
      Project.update({_id: doc.project}, {$set: {missions: [doc._id]}});
    }
    console.log("ici");
    doc.creator = Meteor.userId();
    doc.finish = false;
    console.log("ici");
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
