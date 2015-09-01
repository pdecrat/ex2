# Collectivz
Work in progress

### Todo !
- [x] Do a todo list
- [ ] Everything else

---

## Collection architecture

### user
```
{
  _id: String
  username: String,
  emails: [ { address: String, verified: boolean } ],
  createdAt: Date,
  profile: {
    username: String,
    lastname: String
  },
  role: [String],
  service: { [See Meteor doc](http://docs.meteor.com/#/full/meteor_users) }
}
```

### idea
```
{
  title: {
    type: String,
    unique: true
  },
  content: {
    type: String
  },
  obj_backers: {
    type: Number
  },
  author: {
    type: String,
    optional: true
  },
  members: {
      type: [String],
      optional: true
  },
  votes: {
      type: Number,
      optional: true
  }
}
```

### project
```
{
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  members: {
      type: [String],
      optional:true
  },
  coordinateurs: {
      type: [String],
      optional: true
  },
  missions: {
    type: [String],
    optional: true
  }
}
```

### mission
```
{
  title: {
    type: String
  },
  objectives: {
    type: String
  },
  content: {
    type: String
  },
  members: {
    type: [String],
    optional: true
  },
  team: {
    type: String,
    optional: true
  },
  project: {
    type: String,
    optional: true
  },
  missionType: {
    type: String,
    allowedValues: ['Mission', 'Challenge']
  },
  wall: {
      type: String,
      optional: true
  },
  finish: {
      type: Boolean,
      optional: true
  },
  creator: {
      type: String,
      optional: true
  }
}
```
