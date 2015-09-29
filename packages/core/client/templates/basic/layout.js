/*
** Layout takes care of subscribing to the url related collection.
** Any additional collections needed must be subscribed in related templates.
*/

Template.layout.onRendered(function() {
  var self = this;
  self.autorun(function() {
    var type = FlowRouter.getParam('type');
    var action = FlowRouter.getParam('action');
    var id = FlowRouter.getParam('_id');
    self.subscribe(type, {action: action, _id: id});
  });
});
