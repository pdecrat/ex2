Template.teamsList.helpers({
	teams: function() {
		return Teams.find({});
	},
	teamsCount: function() {
		return Teams.find({}).count()
	}

});

Template.teamsList.events({
	'submit form': function(e) {
		e.preventDefault();
		return Teams.insert(this._id);
	}

});
