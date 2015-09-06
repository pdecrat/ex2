Meteor.methods({
  insertTeam: function(data) {
    if (Meteor.userId()) {
      var exist = Team.findOne( {name: data.name });

      if (!exist)
        Team.insert(data);
    }
  }
})
