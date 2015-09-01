Meteor.publish("event", function () {
  return Events.find({});
});

Events.allow({
  insert: function (userId, doc) {
      currentUser = Meteor.user();
      console.log(currentUser.profile.role);
     // doc.author = currentUser._id;
      if (currentUser.profile.role === 'mastermind') {
        console.log("true");
        return true;
      }
      console.log("forbidden insert : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
    },
  remove: function (userId, doc) {
    currentUser = Meteor.user();
    console.log(currentUser);
  if (currentUser.profile.role === 'mastermind' || currentUser.userId === doc.username)
    return true;
  return false;
  }
});

//Events.before.insert(function (userId, doc) {
//  Informs.throw(doc.content);
//})
