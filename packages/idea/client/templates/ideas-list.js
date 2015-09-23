Template.ideaListDisplay.onCreated(function() {
	var self = this;
	self.search = new ReactiveVar(null);
	self.autorun(function() {
		var sub = self.subscribe('idea', {action: 'list'});
	});
	self.getIdeas = function() {
		return Idea.find();
	}
});

Template.ideaListDisplay.helpers({
	ideas: function() {
		return Template.instance().getIdeas();
	},
	search: function() {
		if (Template.instance()) {
			t = Template.instance().search.get();
			if (t == "" || t == undefined || t == null)
				return false;
			return true;
		}
		return false
	},
	getIdeas: function() {
		return IdeaSearch.getData();
	}
});


Template.ideaListDisplay.events({
  "keyup #search-box": _.throttle(function(e, t) {
		template = t;
			t.search.set($(e.target).val().trim());
    	IdeaSearch.search(t.search.get());
	  }, 200)
});
