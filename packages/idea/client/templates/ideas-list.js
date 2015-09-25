Template.ideaListDisplay.onCreated(function(params) {
	Collectivz.templateSub(this, {search: true});
});

Template.ideaListDisplay.helpers({
	ideas: function() {
		t = Template.instance()
		s = t.search.get();
		return t.getItems(s);
	}
});


Template.ideaListDisplay.events({
  "keyup #search-box": _.throttle(function(e, t) {
		template = t;
			t.search.set($(e.target).val().trim());
		}, 200)
});
