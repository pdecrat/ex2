Schemas = {};

OwnerSchema = new SimpleSchema({
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
    type: OwnerSchema
  }
});

Schemas.public = PublicSchema;
