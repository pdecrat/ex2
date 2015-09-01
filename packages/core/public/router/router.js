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
