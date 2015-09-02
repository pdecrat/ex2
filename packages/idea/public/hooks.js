Idea.after.insert(function () {
  var wall = {key: this._id, from: "idea"};
  Wall.insert(wall);
});
