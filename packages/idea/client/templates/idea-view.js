Template.IdeaView.onCreated(function() {
	var self = this;
	var id = FlowRouter.getParam('_id');

	self.selectedMenu = new ReactiveVar('Idea');
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
		Template.instance().selectedMenu.set(this.templates);
	},
	// 'click #startElection': function() {
	// 	var election = {
	// 		name: 'Election',
	// 		template: 'Election'
	// 	}
	// 	Idea.update(this._id, {$addToSet: {templates: }})
	// }
})
