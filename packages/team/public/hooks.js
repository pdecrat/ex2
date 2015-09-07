Team.after.insert(function () {
  Roles.giveToken(Meteor.userId(), 'referee', this._id);
  var wall = {key: this._id, from: "team"};
  Wall.insert(wall);
});
