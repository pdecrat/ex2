Template.ideaItem.helpers({
	upvotedClass: function() {
    	var userId = Meteor.userId();
    	if (userId && !_.include(this.members, userId)) {
     		return 'btn-primary upvotable';
    	}
  		return 'disabled';
    },
	percent: function() {
		if (this.member === undefined || this.member.length === 0)
			return "0%";
		var percent = Math.round(this.member.length * 100 / this.obj_backers);
		return percent.toString() + "%";
	}
});

Template.ideaItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});
