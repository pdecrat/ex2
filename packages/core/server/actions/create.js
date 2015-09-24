Actions.create = function(data) {
  var newId = new Mongo.ObjectID();

  data._id = newId._str;
  data.url = '/' + data.type + '/view/' + data._id;
  data.createdAt = new Date();
  return Collectivz.insert(data);
}
