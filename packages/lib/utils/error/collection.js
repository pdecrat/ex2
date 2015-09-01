Errors = new Mongo.Collection(null);

Errors.throw = function(message) {
  	Errors.insert({ message: message });
};
