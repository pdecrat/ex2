Meteor.publish("mission", function (params) {
  if (params) {
    if (params._id)
      return Mission.find({_id: params._id});
    return Mission.find({project: params.key});
  }
})
