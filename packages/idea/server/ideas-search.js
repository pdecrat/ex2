Search.defineSource('ideas', function(searchText, options) {
  var options = {limit: 20};

  if (searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {title: regExp}
    ]};
    return Idea.find(selector, options).fetch();
  } else {
    return Idea.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
