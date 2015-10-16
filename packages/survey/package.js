Package.describe({
  name: 'collectivz:survey',
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
    'common/collection.js',
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/methods.js',
    'server/publish.js',
    ], [ 'server' ]);

  api.addFiles([
    'client/survey-create.html',
    'client/survey-create.js',
    'client/survey-item.html',
    'client/survey-list.html',
    'client/survey-list.js',
    'client/survey-view.html',
    'client/survey-view.js',
    'client/survey.html',
    'client/survey.js',
    ], [ 'client' ]);

  api.export([
  	'Survey'
  	]);
});
