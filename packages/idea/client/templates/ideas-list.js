Template.ideaListDisplay.onCreated(function() {
	var self = this;
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
	}
});

Template.ideaSearch.helpers({
  getIdeas: function() {
    return IdeaSearch.getData();
  }
});

Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    IdeaSearch.search(text);
  }, 200)
});

Template.searchBox.onCreated(function() {
	IdeaSearch.search("");
});
