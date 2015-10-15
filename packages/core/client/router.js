/*
** Client side routing logic => FlowRouter
*/

FlowRouter.route('/Logout', {
   name: 'logout',
   triggersEnter: [function(context, redirect) {
      Meteor.logout()
      redirect('/Login');
   }]
});

FlowRouter.route('/', {
   name: 'home',
   triggersEnter: [function(context, redirect) {
      redirect('/Home');
   }]
});

FlowRouter.route('/:type?/:_id?/', {
   action: function(params) {
      // Renders template depending on current url.
      if (params) {
         template = params.type;
      }
      if(!Blaze.isTemplate(Template[template]))
        template = 'NotFound';
      BlazeLayout.render('Layout', {template: template, content: params});
   }
});

FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render('Layout', {template: 'NotFound', content: null});
    }
};
