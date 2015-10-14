/*
** Publish current custom User if logged as well as its activity
*/

Meteor.publish('userSub', function() {
   if (this.userId) {
      return [ Collectivz.find({_id: this.userId, type: "Person"},
         { fields: {
            emails: 1,
            username: 1,
            profile: 1,
            roles: 1,
            character: 1,
            notification: 1 }
         }), Activity.find({ userId: this.userId }) ];
   }
   return null;
})

Meteor.publish('ideaSub', function(params) {
   if (params) {
      if (params.action == 'List')
         return Idea.find({});
       else if (params.action == 'View') {
          if ( params.id && typeof params.id === "string")
            return Idea.find({_id: params.id});
       }
   }
   return null;
});

Meteor.publish('projectSub', function(params) {
   if (params) {
      if (params.action == 'List')
         return Project.find({});
       else if (params.action == 'View') {
          if (params.id && typeof params.id === "string")
            return Project.find({_id: params.id});
       }
   }
   return null;
});

Meteor.publish('electionSub', function(params) {
   if (params) {
      if (params.action == 'List')
         return Election.find({});
       else if (params.action == 'View') {
          if (params.id && typeof params.id === "string")
            return Election.find({_id: params.id});
       }
   }
   return null;

});

Meteor.publish("mission", function (params) {
  if (params) {
    return Mission.find();
  }
})


Meteor.publish("surveySub", function (params) {
   if (params) {
      if (params.action == 'List')
         return Survey.find({});
       else if (params.action == 'View') {
          if (params.id && typeof params.id === "string")
            return Survey.find({_id: params.id});
       } else {
          if (params.attachedTo && typeof params.attachedTo === "object") {
             return Survey.find({ attachedTo: {_id: params.attachedTo._id, type: params.attachedTo.type }});
          }
       }
   }
   return null;
});

Meteor.publish('teamSub', function(params) {
   if (params) {
      if (params.action == 'List')
         return Team.find({});
       else if (params.action == 'View') {
          if (params.id && typeof params.id === "string")
            return Team.find({_id: params.id});
       }
   }
   return null;
});

Meteor.publish("wallSub", function (params) {
   if (params) {
      if (params.action == 'List')
         return Wall.find({});
       else if (params.action == 'View') {
          if (params.id && typeof params.id === "string")
            return Wall.find({_id: params.id});
       } else {
          if (params.attachedTo && typeof params.attachedTo === "object") {
             return Wall.find({ attachedTo: {_id: params.attachedTo._id, type: params.attachedTo.type }});
          }
       }
   }
   return null;
});
