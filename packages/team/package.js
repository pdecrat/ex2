Package.describe({
  name: 'collectivz:team',
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
  api.versionsFrom('1.1.0.3');
  var packages = [
  'collectivz:lib'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'public/collection.js',
    'public/hooks.js'
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/publish.js',
    'server/methods.js'
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/team-create.html',
    'client/templates/team-create.js',
    'client/templates/team-item.html',
    'client/templates/teams-list.html',
    'client/templates/teams-list.js'
    ], [ 'client' ]);

  api.export([
    'Team'
  	]);
});
