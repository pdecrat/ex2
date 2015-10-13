// Meteor.publish("election", function (params) {
//   if (params.action == 'list')
//     return Election.find({});
//   return Election.find({ _id: params.id });
// });

Meteor.publish('electionSub', function(id) {
   if (this.userId) {
      if (id && typeof id === "string")
         return Election.findOne(id)
      return Election.find({}, { limit: 20 })
   }
   return null;
});
