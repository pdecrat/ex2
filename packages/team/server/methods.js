Meteor.methods({
  insertTeam: function(data) {
    if (Meteor.userId()) {
      var exist = Team.findOne( {name: data.name });

      if (!exist) {
        data.type = 'Team';
        Actions.create(data);
      }
    }
  },
  isUser: function(username) {
    var user = null;

    if (typeof username === "string")
        user = Meteor.users.findOne({ username: username });
    if (user)
        return true;
    return false;
  }
})
