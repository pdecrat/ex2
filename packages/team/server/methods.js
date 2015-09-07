Meteor.methods({
  insertTeam: function(data) {
    if (Meteor.userId()) {
      var exist = Team.findOne( {name: data.name });

      if (!exist)
        Team.insert(data);
    }
  },
  getUserInfo: function(username) {
    var ret = Utils.getUserInfo(username);

    return ret;
  }
})
