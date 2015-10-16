Package.describe({
  name: 'collectivz:content-generator',
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
  api.versionsFrom('1.2.0.1');

  var packages = [
    'collectivz:lib'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    ], [ 'client', 'server' ]);

  api.addFiles([
    'generator.js'
    ], [ 'server' ]);

  api.addFiles([
    ], [ 'client' ]);

  api.export([
    'Generator'
    ]);
});
