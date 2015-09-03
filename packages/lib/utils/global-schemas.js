Schemas = {};

AuthorSchema = new SimpleSchema({
  id: {
    type: String,
    unique: true
  },
  username: {
    type: String
  }
});

PublicSchema = new SimpleSchema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

Schemas.author = AuthorSchema;
Schemas.public = PublicSchema;
