Template.adminUserListDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('user', {action: 'list'});
	});
	self.getUsers = function() {
		return Meteor.users.find();
	}
});

Template.adminUserListDisplay.helpers({
	users: function() {
		return Template.instance().getUsers();
	},
	tokens: function() {

	}
});

Template.adminUserListDisplay.events({
  'click .add-token': function (e, t) {
    var fieldName = '#' + this.username + '-add-role';
    var token = $(fieldName).val();

    Meteor.call('giveToken', this._id, token);
  }
})
