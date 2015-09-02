Package.describe({
  name: 'collectivz:mission',
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
    'collectivz:lib'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'public/collection.js',
    'public/methods.js',
    'public/hooks.js'
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/publish.js'
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/mission-create.html',
    'client/templates/mission-create.js',
    'client/templates/mission-item.html',
    'client/templates/mission-item.js',
    'client/templates/missions-list.html',
    'client/templates/missions-list.js',
    'client/templates/mission-view.html',
    'client/templates/mission-view.js'
  ], [ 'client' ]);

  api.export([
    'Mission'
    ]);
});
