Template.ideaListDisplay.onCreated(function() {
	var self = this;
	self.search = new ReactiveVar('');
	self.autorun(function() {
		var sub = self.subscribe('idea', {action: 'list'});
	});
	self.getIdeas = function(searchText) {
    var parts = searchText.trim().split(/[ \-\:]+/);
		regExp = new RegExp("(" + parts.join(' ') + ")", "ig");
		return Idea.find({ title: { $regex: regExp } } );
	}
});

//   return new RegExp("(" + parts.join('|') + ")", "ig");

// db.products.find( { sku: { $regex: /^ABC/i } } )


Template.ideaListDisplay.helpers({
	ideas: function() {
		t = Template.instance()
		s = t.search.get();
		return t.getIdeas(s);
	}
});


Template.ideaListDisplay.events({
  "keyup #search-box": _.throttle(function(e, t) {
		template = t;
			t.search.set($(e.target).val().trim());
		}, 200)
});
