Meteor.publish("mission", function (params) {
  if (params) {
    return Mission.find();
  }
})
