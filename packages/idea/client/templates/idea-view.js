Template.IdeaView.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('_id');
	  self.subscribe('ideaSub', id);
	});
	self.selectedMenu = new ReactiveVar('Idea');
});

Template.IdeaView.helpers({
	idea: function() {
 		return Idea.findOne(FlowRouter.getParam('_id'));
	},
	selectedMenu: function() {
		return Template.instance().selectedMenu.get();
	}
});

Template.IdeaView.events({
	'click .menuButton': function() {
		Template.instance().selectedMenu.set(this.templates);
	}
})
