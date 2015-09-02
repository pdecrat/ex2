Mission.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post'};
  var wall = {key: this._id, from: "mission", posts: [post]};
  Walls.insert(wall);
  wall = Walls.findOne({key: this._id});
  Mission.update(this._id, {
    $set: {wall: wall._id}
  })
});
