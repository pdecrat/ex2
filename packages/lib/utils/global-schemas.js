Schemas = {};

OwnerSchema = new SimpleSchema({
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
  },
  owner: {
    type: OwnerSchema
  }
});

Schemas.owner = OwnerSchema;
Schemas.public = PublicSchema;
