Package.describe({
  name: 'collectivz:slider',
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
      'client/project-slider.html',
      'client/idea-slider.html',
      'client/slider.html',
      'client/slider.js'
      ], [ 'client' ]);
});
