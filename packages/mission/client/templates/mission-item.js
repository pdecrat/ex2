Template.missionItem.onCreated(function() {

	var instance = this;

	instance.autorun(function() {
		var sub = instance.subscribe('mission', {action: 'list'});
	});

	instance.mission = function() {
		return Mission.find();
	}
});

Template.missionItem.helpers({
	finish: function() {
    	var userId = Meteor.userId();
    	if (userId === this.owner.id && this.finish === false) {
     		return 'btn-primary finish';
    	}
    	else
    		return 'disabled';
  },
  register: function() {
      var userId = Meteor.userId();
      if (userId != this.owner.id && !_.include(this.members, userId))
        return 'btn-primary register';
  }
});

Template.missionItem.events({
  'click .finish': function(e) {
    e.preventDefault();
    Meteor.call('finish', this._id);
  },
  'click .register': function(e) {
    e.preventDefault();
    Meteor.call('register', this._id);
  }
});
