var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['title', 'content'];

IdeaSearch = new Search('ideas', fields, options);
