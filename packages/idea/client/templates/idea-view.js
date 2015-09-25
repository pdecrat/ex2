Template.ideaViewDisplay.onCreated(function() {
	Collectivz.templateSub(this)
});

Template.ideaViewDisplay.helpers({
	idea: function() {
		var idea = Template.instance().getItem();
		if (idea === undefined)
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
