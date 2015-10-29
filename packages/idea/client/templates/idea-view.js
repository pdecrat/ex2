Template.IdeaView.onCreated(function() {
	var self = this;
	var id = FlowRouter.getParam('_id');

	self.selectedMenu = new ReactiveVar('IdeaDescription');
	self.autorun(function() {
	  self.subscribe('ideaSub', {id: id, action: 'View'});
	});
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
		Template.instance().selectedMenu.set(this.template);
	},
	'click #startElection': function() {
		Meteor.call('startElection', this._id);
	}
})
