Template.MissionItem.helpers({
	finish: function() {
    	var userId = Meteor.userId();
    	if (this.owner && userId === this.owner._id && this.finish === false) {
     		return 'btn-primary finish';
    	}
    	else
    		return 'disabled';
  },
  register: function() {
      var userId = Meteor.userId();
      if (this.owner && userId != this.owner._id && !_.include(this.members, userId))
        return 'btn-primary register';
  }
});

Template.MissionItem.events({
  'click .finish': function(e) {
    e.preventDefault();
    Meteor.call('finish', this._id);
  },
  'click .register': function(e) {
    e.preventDefault();
    Meteor.call('register', this._id);
  }
});
