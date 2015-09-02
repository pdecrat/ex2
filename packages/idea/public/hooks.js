Idea.after.insert(function () {
  var post = {username: "Collectivz", content: 'content du post', author: { id: "fake", username: "fake"}, createdAt: new Date()};
  var wall = {key: this._id, from: "idea", posts: [post]};
  Wall.insert(wall);
});
