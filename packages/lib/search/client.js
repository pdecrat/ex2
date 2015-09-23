/*
** Search function :
**  source  <=> the source you wanna search <=> string
**  fields  <=> associated fields you want to return <=> array
**  options <=> {
      transform: function,
      limit: number,
      sort: object,
      keepHistory: number
      localSearch: Boolean
    }
*/

Search = function Search(source, fields, options) {
  this.source = source;
  this.searchFields = fields;
  this.currentQuery = null;
  this.options = options || {};

  this.status = new ReactiveVar({loaded: true});
  this.history = {};
  this.store = new Mongo.Collection(null);

  this._storeDependency = new Tracker.Dependency();
  this._currentQueryDependency = new Tracker.Dependency();
}

Search.prototype._loadData = function (query, options) {

  var self = this;
  var historyKey = query + EJSON.stringify(options);
  if (this._canUseHistory(historyKey)) {
    this._updateStore(this.history[historyKey].data);
    self._storeDependency.changed();
  } else {
    this.status.set({loading: true});
    this._fetch(this.source, query, options, handleData);
  }

  function handleData(err, payload) {
    if (err) {
      self.status.set({error: err});
      throw err;
    } else {
      if (payload instanceof Array) {
        var data = payload;
      } else {
        var data = payload.data;
      }

      if (self.options.keepHistory) {
        self.history[historyKey] = {data: data, loaded: new Date()}
      }

      self._updateStore(data);
      self.status.set({loaded: true});
      self._storeDependency.changed();
    }
  }
};

Search.prototype._canUseHistory = function(historyKey) {
  var historyItem = this.history[historyKey];
  if (this.options.keepHistory && historyItem) {
    var diff = Date.now() - historyItem.loaded.getTime();
    return diff < this.options.keepHistory;
  }
  return false;
}

Search.prototype._updateStore = function(data) {
  var self = this;
  var storeIds = _.pluck(this.store.find().fetch(), "_id");
  var currentIds = [];
  data.forEach(function(item) {
    currentIds.push(item._id);
    self.store.update(item._id, item, {upsert: true});
  })

  var currentIdMappings = {};
  _.each(currentIds, function(currentId) {
    var str = (currentId._str) ? currentId._str : currentId;
    currentIdMappings[str] = true;
  });

  _.each(storeIds, function(storeId) {
    var str = (storeId._str) ? storeId._str : storeId;
    if (!currentIdMappings[str]) {
      self.store.remove(storeId);
    }
  });
};

Search.prototype.search = function(query, options) {
  this.currentQuery = query;
  this._currentQueryDependency.changed();

  this._loadData(query, options);

  if (this.options.localSearch) {
    this._storeDependency.changed();
  }
};

Search.prototype.getData = function(options, getCursor) {
  options = options || {};
  var self = this;
  this._storeDependency.depend();
  var selector = {$or: []};

  var regExp = this._buildRegExp(self.currentQuery);

  if (this.getStatus().loading) {
    self.searchFields.forEach(function(field) {
      var singleQuery = {};
      singleQuery[field] = regExp;
      selector['$or'].push(singleQuery);
    });
  } else {
    selector = {};
  }

  function transform(doc) {
    if (options.transform) {
      self.searchFields.forEach(function(field) {
        if (self.currentQuery && doc[field]) {
          doc[field] = options.transform(doc[field], regExp, field, self.currentQuery);
        }
      });
    }
    if (options.docTransform) {
      return options.docTransform(doc);
    }
    return doc;
  }

  var cursor = this.store.find(selector, {
    sort: options.sort,
    limit: options.limit,
    transform: transform
  });

  if (getCursor) {
    return cursor;
  }

  return cursor.fetch();
};

Search.prototype._fetch = function(source, query, options, callback) {
  if (typeof this.fetchData == 'function') {
    this.fetchData(query, options, callback);
  } else if (Meteor.status().connected) {
    this._fetchDDP.apply(this, arguments);
  } else {
    console.log("no DDP, should fall back to http...")
  }
}

Search.prototype._fetchDDP = function(source, query, options ,callback) {
  Meteor.call("search.source", this.source, query, options, callback);
};

Search.prototype.getCurrentQuery = function() {
  this._currentQueryDependency.depend();
  return this.currentQuery;
}

Search.prototype.getStatus = function() {
  return this.status.get();
}

Search.prototype.cleanHistory = function() {
  this.history = {};
}

Search.prototype._buildRegExp = function(query) {
  query = query || "";

  var afterFilteredRegExpChars = query.replace(this._getRegExpFilterRegExp(), "\\$&");
  var parts = afterFilteredRegExpChars.trim().split(' ');

  return new RegExp("(" + parts.join('|') + ")", "ig");
}

Search.prototype._getRegExpFilterRegExp = _.once(function() {
  var regExpChars = [
    "\\", "^", "$", "*", "+", "?", ".",
     "(", ")", ":", "|", "{", "}", "[", "]",
     "=", "!", ","
  ];
  var regExpCharsReplace = _.map(regExpChars, function(c) {
    return "\\" + c;
  }).join("|");
  return new RegExp("(" + regExpCharsReplace + ")", "g");
});
