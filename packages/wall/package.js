Package.describe({
  name: 'collectivz:wall',
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
  'collectivz:lib'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'public/collection.js',
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/methods.js',
    'server/publish.js',
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/wall.html',
    'client/templates/wall.js'
    ], [ 'client' ]);

  api.export([
  	'Wall'
  	]);
});
