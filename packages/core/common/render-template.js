// Collections = {
//   user: Meteor.users,
//   idea: Idea,
//   project: Project,
//   mission: Mission,
//   team: Team
// };

render = function(params) {
  if (params.action) {
    template = params.type + params.action + 'Display';
  } else {
    template = params.type + 'Display';
  }
  if(!Blaze.isTemplate(Template[template]))
    template = 'not-found';
  BlazeLayout.render('layout', {template: template, content: params});
};
