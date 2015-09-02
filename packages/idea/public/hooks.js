Idea.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post'};
  var wall = {key: this._id, from: "idea", posts: [post]};
  Wall.insert(wall);
});
