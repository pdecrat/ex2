Schemas = {};

UserSchema = new SimpleSchema({
  id: {
    type: String
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
  },
  owner: {
    type: UserSchema
  }
});

Schemas.public = PublicSchema;
Schemas.user = UserSchema;
