/*
** Layout takes care of subscribing to the url related collection.
** Any additional collections needed must be subscribed in related templates.
*/

Template.Layout.onRendered(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('userSub');
  });
});
