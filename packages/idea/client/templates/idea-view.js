Template.IdeaView.onCreated(function() {
	var self = this;
	self.selectedMenu = new ReactiveVar('IdeaView');
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
