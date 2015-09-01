Package.describe({
  name: 'collectivz:event',
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
  'collectivz:inform'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'public/events.js'
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/publish.js'
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/event-create.html',
    'client/templates/events-list.html',
    'client/templates/events-list.js',
    'client/templates/events.html',
    'client/templates/events.js',
    'client/subscribe.js'

    ], [ 'client' ]);

  api.export([
  	'Events'
  	]);
});
