Template.ideaViewDisplay.onCreated(function() {

	var self = this;
	var id = self.data.id;

	self.autorun(function() {
		self.subscribe('idea', {action: 'view', id: id});
	});

	self.getIdea = function() {
		return Idea.findOne({ _id: id });
	}
});

Template.ideaViewDisplay.helpers({
	idea: function() {
		var idea = Template.instance().getIdea();
		if(idea === undefined)
			FlowRouter.go('/not-found');
		return idea
	},
	canStart: function() {
		if (this.credits >= this.obj_backers)
			return '';
		return 'hidden';
	}
});

Template.ideaViewDisplay.events({
	'click #vote': function(e, t) {
		e.preventDefault();

		Meteor.call('vote', {_id: this._id, type: this.type});
	},
	'click #applyCandidature': function(e, t) {
		e.preventDefault();

		Meteor.call('applyCandidature', {_id: this._id, type: this.type});
	}
})
