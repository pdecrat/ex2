Template.ideaItem.helpers({
	upvotedClass: function() {
    	var userId = Meteor.userId();
    	if (userId && !_.include(this.members, userId)) {
     		return 'btn-primary upvotable';
    	}
  		return 'disabled';
    },
	percent: function() {
		// if (this.members === undefined || this.members.length === 0)
		// 	return "0%";
		// var percent = Math.round(this.members.length * 100 / this.obj_backers);
		// return percent.toString() + "%";
		return this.credits + '%';
	}
});

Template.ideaItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },
	'click .removeIdea': function(e) {
		e.preventDefault();
		Meteor.call('removeIdea', this._id);
	},
	'click #giveCredits': function(e, t) {
		e.preventDefault();

		Meteor.call('giveCredits', {_id: this._id, type: this.type}, function(err, res) {
			// Errors.throw(err);
		});
	}
});
