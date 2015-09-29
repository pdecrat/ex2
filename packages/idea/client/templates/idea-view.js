Template.IdeaViewDisplay.onCreated(function() {
	var self = this;
	var data = self.data;
	self.selectedMenu = new ReactiveVar('IdeaView');

	Collectivz.templateSub(self);


});

Template.IdeaViewDisplay.onRendered(function() {
	var self = this;
	var data = self.data;

	if (data.sub && self.sub.ready()) {
		var menus = Collectivz.findOne({type: data.type, _id: data._id});
		menus.forEach(function(menu) {
			if (menu.name === data.sub) {
				self.selectedMenu.set(menu.templates);
			}
		})
	}
})

Template.IdeaViewDisplay.helpers({
	idea: function() {
		var idea = Template.instance().getItem();
		if (idea === undefined)
			FlowRouter.go('/not-found');
		return idea
	},
	getContent: function() {
		return Template.instance().selectedMenu.get();
	}
});

Template.IdeaViewDisplay.events({
	'click .menuButton': function() {
		Template.instance().selectedMenu.set(this.templates);
	}
})
