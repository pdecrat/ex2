Collectivz = {};

Collectivz.collections = {
  Person: Meteor.users,
  Idea: Idea,
  Project: Project,
  // Challenge: Challenge,
  Election: Election,
  Mission: Mission,
  Survey: Survey,
  Team: Team,
  Wall: Wall
};

Collectivz.selected = new ReactiveVar(0);
Collectivz.reactiveSubs = new ReactiveVar([]);

// Collectivz provides all basic functions for its collections

// query must have a type field set to a value that matches a
//  field name in Collectivz.collections

Collectivz.find = function (query) {
    return Collectivz.collections[query.type].find(query);
};

Collectivz.findOne = function (query, fields) {
  return Collectivz.collections[query.type].findOne(query);
};

Collectivz.insert = function (query) {
    return Collectivz.collections[query.type].insert(query);
};

Collectivz.update = function (query) {
    return Collectivz.collections[query.type].update(query._id, query);
};

Collectivz.remove = function (query) {
  return Collectivz.collections[query.type].remove(query._id);
};
