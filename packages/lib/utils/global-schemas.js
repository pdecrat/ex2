Schemas = {};

OwnerSchema = new SimpleSchema({
  id: {
    type: String
  },
  username: {
    type: String
  }
});

Schemas.owner = OwnerSchema;
