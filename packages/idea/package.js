Package.describe({
  name: 'collectivz:idea',
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
    'client/templates/idea-create.html',
    'client/templates/idea-create.js',
    'client/templates/idea-item.html',
    'client/templates/idea-item.js',
    'client/templates/idea-update.html',
    'client/templates/idea-update.js',
    'client/templates/idea-description.html',
    'client/templates/idea-description.js',
    'client/templates/idea-view.html',
    'client/templates/idea-view.js',
    'client/templates/ideas-list.html',
    'client/templates/ideas-list.js',
    ], [ 'client' ]);

  api.export([
  	'Idea'
  	]);
});
