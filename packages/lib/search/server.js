Search = {};
Search._sources = {};

Search.defineSource = function(name, callback) {
  Search._sources[name] = callback;
};

Meteor.methods({
  "search.source": function(name, query, options) {
    check(name, String);
    check(query, Match.OneOf(String, null, undefined));
    check(options, Match.OneOf(Object, null, undefined));
    this.unblock();

    return getSourceData.call(this, name, query, options);
  }
});

function getSourceData(name, query, options) {
  var source = Search._sources[name];

  if(source) {
    return source.call(this, query, options);
  } else {
    throw new Meteor.Error(404, "No such search source: " + name);
  }
}
