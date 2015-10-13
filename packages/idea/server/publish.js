Meteor.publish('ideaSub', function(id) {
   if (id && typeof id === "string")
      return Idea.find({_id: id});
   return Idea.find({});
});
