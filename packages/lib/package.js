Package.describe({
  name: 'collectivz:lib',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'standard-app-packages',
    'kadira:blaze-layout',
    'kadira:flow-router',
    'arillo:flow-router-helpers',
    'accounts-password',
    'twbs:bootstrap',
    'sacha:spin@0.2.4',
    'momentjs:moment@2.10.3',
    'sacha:autoform@5.1.2',
    'aldeed:template-extension@3.4.3',
    'aldeed:collection2@2.3.3',
    'dburles:collection-helpers@1.0.3',
    'matb33:collection-hooks@0.7.11',
    'reactive-var'
  ];

  api.use(packages, [ 'client', 'server' ]);
  api.imply(packages, [ 'client', 'server' ]);

  api.addFiles([
    'upload.js',
    'stylesheet.css',
    'template-helpers.js',
    'error/collection.js',
    'error/errors.html',
    'error/errors.js'
  ], ['client']);

  api.addFiles([
    'utils.js'
  ], ['client', 'server']);

  api.addFiles([
    'notification.js'
  ], ['server']);

  api.export([
    '_',
    'Errors',
    'Utils',
    'Notif',
    'upload'
  ]);

});
