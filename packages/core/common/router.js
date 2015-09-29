var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId() || userSub.ready() && !Roles.checkRole(Meteor.userId(), 'admin')) {
      Errors.throw("Vous n'êtes pas autorisé à accéder à cette page.");
      redirect('/home');
    }
}],
});

adminRoutes.route('/:type?/:action?/:_id?/:sub?', {
  action: function(params) {
      params.type = 'admin' + params.type;
      render(params);
  }
});

var privateRoutes = FlowRouter.group({
  prefix: '/private',
  name: 'private',
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      Errors.throw("Vous devez vous connecter pour accéder à cette page");
      redirect('/login');
    }
}],
});

privateRoutes.route('/:type?/:action?/:_id?/:sub?', {
  action: function(params) {
      params.type = 'private' + params.type;
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

FlowRouter.route('/:type?/:action?/:_id?/:sub?', {
  action: function(params) {
      render(params);
  }
});
