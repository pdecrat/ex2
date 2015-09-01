Template.characterPage.helpers({
	character: function() {
		user = Meteor.user();
		if (userID)
			return Characters.find(user.character);
	}
});