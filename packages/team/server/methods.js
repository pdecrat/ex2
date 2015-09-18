Meteor.methods({
  insertTeam: function(data) {
    if (Meteor.userId()) {
      var exist = Team.findOne( {name: data.name });

      if (!exist) {
        teamId = Team.insert(data);
        var wall = {key: teamId, from: "team"};
        Wall.insert(wall);
      }
    }
  },
  isUser: function(username) {
    var user = null;
    if (typeof username === "string")
        user = Meteor.users.findOne({ username: username });
    if (user)
        return { id: user._id, username: user.username };
    return null;
  }
})
