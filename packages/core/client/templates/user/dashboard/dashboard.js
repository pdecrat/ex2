Template.Dashboard.onCreated(function() {
  var self = this;
	self.autorun(function() {
    var sub = self.subscribe('projectSub', {action: 'List'});
    var sub = self.subscribe('ideaSub', {action: 'List'});
    var sub = self.subscribe('surveySub', {action: 'List'});
	});

  // self.getMyProjects = function() {
  //   projects = Project.find( { "members.id": Meteor.userId() } ).fetch();
  // return projects;
  //
  // self.getMyIdeas = function() {
  //   ideas = Idea.find( { "owner.id": Meteor.userId() } ).fetch();
  // return ideas;
  //
})

Template.dashboardTasks.helpers({
   group: function() {
      var group = [];
      Project.find({}).fetch().forEach(function(el) {
         group.push(el);
      });
      Idea.find({}).fetch().forEach(function(el) {
         group.push(el);
      });
      return group;
   }
})


// Template.privateDashboardDisplay.events({
//   'click #users-list': function() {
//     FlowRouter.go('/admin/user/list');
//   }
// })
