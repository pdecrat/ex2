Package.describe({
  name: 'collectivz:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
  'collectivz:lib',
  'collectivz:slider',
  'collectivz:geoloc',
  'collectivz:wall',
  'collectivz:mission',
  'collectivz:idea',
  'collectivz:project'
];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'public/router/router.js',
    'public/router/router-helpers.js'
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/accounts-create.js',
    'server/publish.js',
    'server/start.js'
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/basic/layout.html',
    'client/templates/basic/nav.html',
    'client/templates/basic/loading.html',
    'client/templates/basic/loading.js',
    'client/templates/basic/not-found.html',
    'client/templates/user/login.html',
    'client/templates/user/login.js',
    'client/templates/user/register.html',
    'client/templates/user/register.js',
    'client/templates/user/nav-button.html',
    'client/templates/basic/home.html',
    'client/templates/user/dashboard/dashboard.html',
    'client/templates/helpers.js',
    'client/templates/admin/users-list.html',
    'client/templates/admin/users-list.js',
    'client/templates/user/dashboard/dashboard.js',
    'client/templates/user/dashboard/user-item.html',
    'client/subscribe.js'
    ], [ 'client' ]);

    api.export([
      'Errors'
    ]);
});
