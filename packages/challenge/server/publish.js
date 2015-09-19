Meteor.publish("challenge", function (params) {
  if (params) {
    if (params._id)
      return Challenge.find({_id: params._id});
    return Challenge.find({project: params.key});
  }
})
