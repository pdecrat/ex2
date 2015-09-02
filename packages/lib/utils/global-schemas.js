Schemas = {};

AuthorSchema = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
});

Schemas.author = AuthorSchema;
