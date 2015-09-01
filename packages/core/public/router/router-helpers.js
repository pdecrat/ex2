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
  if (!Blaze.isTemplate(Template[template])
    || params.id && Collections[params.dest]
    && !Collections[params.dest].findOne({ _id : params.id}))
    template = 'not-found';
  if(!Blaze.isTemplate(Template[template]))
    template = 'not-found';
  BlazeLayout.render('layout', {template: template, content: {id: params.id, subMenu: params.sub}});
};
