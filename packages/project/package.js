Package.describe({
  name: 'collectivz:project',
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
    'server/publish.js',
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/view/description.html',
    'client/templates/view/map.html',
    'client/templates/view/missions.html',
    'client/templates/view/missions.js',
    'client/templates/view/teams.html',
    'client/templates/view/wiki.html',

    'client/templates/project-item.html',
    'client/templates/project-view.html',
    'client/templates/project-view.js',
    'client/templates/projects-list.html',
    'client/templates/projects-list.js',
    ], [ 'client' ]);

  api.export([
  	'Project'
  	]);
});
