Team.after.insert(function () {
  var wall = {key: this._id, from: "team"};
  Wall.insert(wall);
});
