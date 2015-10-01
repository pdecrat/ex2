/*
** Publish current custom User if logged as well as its activity
*/

Meteor.publish(null, function() {
   if (this.userId)
      return [ Collectivz.find({_id: this.userI, type: "Person"},
         { fields: {
            emails: 1,
            username: 1,
            profile: 1,
            roles: 1,
            character: 1,
            notification: 1 }
         }), Activity.find({ userId: this.userId }) ];
})
