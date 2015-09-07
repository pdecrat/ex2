Utils = {};

Utils.capitalize = function (s) {
    // returns the first letter capitalized + the string from index 1 and out aka. the rest of the string
    return s[0].toUpperCase() + s.substr(1);
};

Utils.getUserInfo = function(username) {
  var user = Meteor.users.findOne({ username: username });

  if (!user)
    return 0;
  return { id: user._id, username: user.username };
};
