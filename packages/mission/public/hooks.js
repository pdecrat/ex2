Mission.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post'};
  var wall = {key: this._id, from: "mission", posts: [post]};
  Walls.insert(wall);
});
