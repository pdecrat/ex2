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

NotificationSchema = new SimpleSchema({
  id: {
    type: Number
  },
  content: {
    type: String
  },
  fromType: {
    type: String
  },
  fromId: {
    type: String
  },
  seen: {
    type: Boolean
  }
})

Schemas.notification = NotificationSchema;
Schemas.public = PublicSchema;
Schemas.user = UserSchema;
