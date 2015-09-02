Mission.after.insert(function () {
  var wall = {key: this._id, from: "mission"};
  Wall.insert(wall);
});
