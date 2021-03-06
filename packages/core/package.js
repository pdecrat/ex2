Package.describe({
  name: 'collectivz:core',
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
  'collectivz:lib',
  'collectivz:wall',
  'collectivz:election',
  'collectivz:idea',
  'collectivz:project',
  'collectivz:mission',
  'collectivz:team',
  'collectivz:survey',
  'collectivz:content-generator'
];

api.addAssets([
   'public/blured.jpg'
], ['client'])



  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'common/collection.js',
    'common/collectivz.js',
    ], [ 'client', 'server' ]);

  api.addFiles([
    'server/start.js',
    'server/hooks/accounts.js',
    'server/hooks/activity.js',
    'server/publish.js',
    'server/methods.js',
    'server/actions/do.js',
    'server/actions/xp.js',
    'server/actions/credits.js',
    'server/actions/notify.js',
    'server/actions/members.js',
    'server/actions/security.js',
    'server/actions/survey.js',
    'server/actions/create.js',
    'server/actions/posts.js',
    ], [ 'server' ]);

  api.addFiles([
    'client/templates/basic/home.html',
    'client/templates/basic/layout.html',
    'client/templates/basic/layout.js',
    'client/templates/basic/loading.html',
    'client/templates/basic/nav.html',
    'client/templates/basic/nav.js',
    'client/templates/basic/not-found.html',

    'client/templates/user/dashboard/dashboard-item.html',
    'client/templates/user/dashboard/dashboard-header.html',
    'client/templates/user/dashboard/dashboard-tasks.html',

    'client/templates/user/dashboard/dashboard.html',
    'client/templates/user/dashboard/dashboard.js',
    'client/templates/user/login.html',
    'client/templates/user/login.js',
    'client/templates/user/nav-button.html',
    'client/templates/user/notification.html',
    'client/templates/user/notification.js',
    'client/templates/user/register.html',
    'client/templates/user/register.js',

    'client/templates/user/profile/experience-item.html',
    'client/templates/user/profile/information-item.html',
    'client/templates/user/profile/information-edit.html',
    'client/templates/user/profile/interest-item.html',
    'client/templates/user/profile/interest-edit.html',
    'client/templates/user/profile/interest-edit.js',
    'client/templates/user/profile/objectif-item.html',
    'client/templates/user/profile/objectif-edit.html',
    'client/templates/user/profile/objectif-edit.js',
    'client/templates/user/profile/profile-view.html',
    'client/templates/user/profile/profile-view.js',
    'client/templates/user/profile/skill-item.html',
    'client/templates/user/profile/skill-edit.html',
    'client/templates/user/profile/skill-edit.js',
    'client/templates/user/profile/talent-item.html',

    'client/templates/activity/activity-item.html',
    'client/templates/activity/activity-list.html',
    'client/templates/activity/activity-list.js',

    'client/router.js',
    ], [ 'client' ]);

    api.export([
      'Activity',
      'Collectivz',
      'Actions',
      ]);
});
