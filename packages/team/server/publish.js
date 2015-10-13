Meteor.publish('teamSub', function(id) {
   if (this.userId) {
      if (id && typeof id === "string")
         return Team.findOne(id)
      return Team.find({}, { limit: 20 })
   }
   return null;
});
