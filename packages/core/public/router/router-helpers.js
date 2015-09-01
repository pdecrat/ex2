Collections = {
  user: Meteor.users,
  idea: Idea
};

capitalize = function (s) {
    // returns the first letter capitalized + the string from index 1 and out aka. the rest of the string
    return s[0].toUpperCase() + s.substr(1);
};

render = function(params) {
  if (params.action) {
    template = params.dest + capitalize(params.action) + 'Display';
  } else {
    template = params.dest + 'Display';
  }
  if(!Blaze.isTemplate(Template[template]))
    template = 'not-found';
  if (params.id) {
    if (Collections[params.dest])
      data = Collections[params.dest].findOne({ _id: params.id });
    if (!data)
      template = 'not-found';
  } else if (Collections[params.dest]) {
    data = Collections[params.dest].find();
  }
  BlazeLayout.render('layout', template);
};
