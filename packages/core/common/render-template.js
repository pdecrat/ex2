Collections = {
  user: Meteor.users,
  idea: Idea,
  project: Project,
  mission: Mission,
  team: Team
};

render = function(params) {
  if (params.action) {
    template = params.dest + Utils.capitalize(params.action) + 'Display';
  } else {
    template = params.dest + 'Display';
  }
  if(!Blaze.isTemplate(Template[template]))
    template = 'not-found';
  BlazeLayout.render('layout', {template: template, content: {id: params.id, subMenu: params.sub}});
};
