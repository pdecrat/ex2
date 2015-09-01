Meteor.publish("team", function () {
    return Teams.find({});
});

Teams.allow({
  insert: function (userId, doc) {
      currentUser = Meteor.user();
      console.log(currentUser.profile.role);

     // doc.author = currentUser._id;
      if (currentUser.profile.role === 'mastermind') {
        var count2 = 0;
        for (var i = 0; i < doc.members.length; i++)
        {
          var count = 0;
          if (Meteor.users.find({'emails.address' : doc.members[i].emails}).fetch().length == 1)
          {
            console.log("trouve dans les users  ");
            console.log(doc.members[i].emails);
            for (var p = 0; p < doc.members.length; p++)
            {
              if (doc.members[i].emails === doc.members[p].emails)
                count++;  
            }
            if (count != 1)
             return false;
            if (doc.members[i].role === 'Referent')
              count2++;
          }
          else
          {            
            console.log("pas trouve dans les users  ");
            console.log(doc.members[i].emails);
            return false;
          }
        }
        if (count2 != 1)
        {
          console.log("erreur referent != 1");
          return false;
        }
        return true;
      }
      console.log("forbidden insert : " + JSON.stringify(doc) + "\ncurrentUser id: " + currentUser._id);
      return false;
    },
  update: function (userId, doc) {
      currentUser = Meteor.user();
      console.log(currentUser.profile.role);
      if (currentUser.profile.role === 'mastermind')
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

Teams.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post'};
  var wall = {key: this._id, from: "team", posts: [post]};
  Walls.insert(wall);
  wall = Walls.findOne({key: this._id});
  Teams.update(this._id, {
    $set: {wall: wall._id}
  })
});
