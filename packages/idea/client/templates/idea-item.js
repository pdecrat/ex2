Template.ideaItem.helpers({
	upvotedClass: function() {
    	var userId = Meteor.userId();
    	if (userId && !_.include(this.members, userId)) {
     		return 'btn-primary upvotable';
    	}
    	else
    		return 'disabled';
    }
});

Template.ideaItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});
