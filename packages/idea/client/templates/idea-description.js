Template.IdeaDescription.helpers({
	percent: function() {
		if (this.credits === undefined)
			return "0%";
		var percent = Math.round(this.credits * 100 / this.obj_backers);
		return percent.toString() + "%";
	}
});

Template.IdeaDescription.events({
	'click #giveCredit': function(e, t) {
		e.preventDefault();
		Meteor.call('giveCredits', {_id: this._id, type: this.type}, function(err, res) {
			// Errors.throw(err);
		});
	},
	'click #becomeMember': function(e, t) {
		e.preventDefault();

		Meteor.call('becomeMember', {_id: this._id, type: this.type}, function(err, res) {
			// Errors.throw(err);
		});
	}
});
