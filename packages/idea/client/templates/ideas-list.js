Template.IdeaListDisplay.onCreated(function(params) {
	var self = this;
	self.search = new ReactiveVar('');
});

Template.IdeaListDisplay.helpers({
	ideas: function() {
		t = Template.instance()
		s = t.search.get();
		var parts = s.trim().split(/[ \-\:]+/);
		regExp = new RegExp("(" + parts.join(' ') + ")", "ig");
		query = { type: "Idea", name: {$regex: regExp } };
		return Collectivz.find(query)
	}
});

Template.IdeaListDisplay.events({
  "keyup #search-box": _.throttle(function(e, t) {
  	t.search.set($(e.target).val().trim());
  }, 200)
});
