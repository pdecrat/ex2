Template.IdeaList.onCreated(function(params) {
	var self = this;
	self.autorun(function() {
	  self.subscribe('ideaSub', null);
	});
	self.search = new ReactiveVar('');
});

Template.IdeaList.helpers({
	ideas: function() {
		t = Template.instance()
		s = t.search.get();
		var parts = s.trim().split(/[ \-\:]+/);
		regExp = new RegExp("(" + parts.join(' ') + ")", "ig");
		query = { type: "Idea", name: {$regex: regExp } };
		return Collectivz.find(query)
	}
});

Template.IdeaList.events({
  "keyup #search-box": _.throttle(function(e, t) {
  	t.search.set($(e.target).val().trim());
  }, 200)
});
