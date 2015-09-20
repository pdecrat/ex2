Package.describe({
  name: 'collectivz:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
  'collectivz:lib',
  'collectivz:wall',
  'collectivz:election',
  'collectivz:idea',
  'collectivz:project',
  'collectivz:mission',
  'collectivz:team',
];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'common/collection.js',
    'common/router.js',
    'common/render-template.js',
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/hooks/accounts.js',
    'server/hooks/activity.js',
    'server/hooks/mission.js',
    'server/publish.js',
    'server/methods.js',

    ], [ 'server' ]);

  api.addFiles([
    'client/templates/basic/home.html',
    'client/templates/basic/layout.html',
    'client/templates/basic/loading.html',
    'client/templates/basic/nav.html',
    'client/templates/basic/nav.js',
    'client/templates/basic/not-found.html',

    'client/templates/user/dashboard.html',
    'client/templates/user/dashboard.js',
    'client/templates/user/login.html',
    'client/templates/user/login.js',
    'client/templates/user/nav-button.html',
    'client/templates/user/notification.html',
    'client/templates/user/notification.js',
    'client/templates/user/register.html',
    'client/templates/user/register.js',
    'client/templates/user/users-list.html',
    'client/templates/user/users-list.js',

    'client/templates/activity/activity-item.html',
    'client/templates/activity/activity-list.html',
    'client/templates/activity/activity-list.js',

    'client/subscribe.js',
    ], [ 'client' ]);

    api.export([
      'Activity'
      ]);
});
