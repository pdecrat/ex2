Template.eventsList.helpers({
	events: function() {
		currentUser = Meteor.user();
		if (currentUser.profile.role &&currentUser.profile.role === 'mastermind')
			return Events.find({});
		result = Events.find({userId: null }).fetch().concat(
			Events.find({ userId: currentUser._id}).fetch());
		return result;
	},
	eventsCount: function() {
		return Events.find({}).count();
	}

});

Template.eventsList.events({
	'click button': function(e) {
		e.preventDefault();
		return Events.remove(this._id);
	}

});
