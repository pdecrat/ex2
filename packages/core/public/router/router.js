var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId() || userSub.ready() && !Roles.isAdmin(Meteor.userId())) {
      Errors.throw("Vous n'êtes pas autorisé à accéder à cette page.");
      redirect('/home');
    }
}],
});

adminRoutes.route('/:dest?/:action?/:id?/:sub?', {
  action: function(params) {
      params.dest = 'admin' + Utils.capitalize(params.dest);
      render(params);
  }
});

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

FlowRouter.route('/:dest?/:action?/:id?/:sub?', {
  action: function(params) {
      render(params);
  }
});
