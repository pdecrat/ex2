/*
** Client side routing logic => FlowRouter
*/

FlowRouter.route('/logout', {
   name: 'logout',
   triggersEnter: [function(context, redirect) {
      Meteor.logout()
      redirect('/login');
   }]
});

FlowRouter.route('/', {
   name: 'home',
   triggersEnter: [function(context, redirect) {
      redirect('/home');
   }]
});

FlowRouter.route('/:type?/:action?/:_id?/:sub?', {
   action: function(params) {
      // Renders template depending on current url.
      if (params.action) {
         if (params.action == 'List' && params._id)
            template = 'notFound';
         else {
            console.log(params._id)
            template = params.type + params.action + 'Display';
         }
      } else {
         template = params.type + 'Display';
      }
      if(!Blaze.isTemplate(Template[template]))
      template = 'notFound';
      BlazeLayout.render('layout', {template: template, content: params});
   }
});
