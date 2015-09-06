Template.privateDashboardDisplay.onCreated(function() {
  var self = this;
	self.autorun(function() {
    var sub = self.subscribe('project', {action: 'list'});
    var sub = self.subscribe('idea', {action: 'list'});
	});
  self.getMyProjects = function() {
    projects = Project.find( { "members.id": Meteor.userId() } ).fetch();
		return projects;
	}
  self.getMyIdeas = function() {
    ideas = Idea.find( { "owner.id": Meteor.userId() } ).fetch();
		return ideas;
	}
})

Template.privateDashboardDisplay.helpers({
  projects: function() {
    return {
      title: "My awesome projects",
      css: "project1",
      template: "projectSlider",
      dataContext: Template.instance().getMyProjects()
     }
  },
  ideas: function() {
    return {
      title: "All my ideas",
      css: "idea1",
      template: "ideaSlider",
      dataContext: Template.instance().getMyIdeas() }
  }
})

Template.privateDashboardDisplay.events({
  'click #users-list': function() {
    FlowRouter.go('/admin/user/list');
  }
})
