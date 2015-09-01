// Write your package code here!
Teams = new Mongo.Collection('teams');

Members = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/
    },
    emails: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    role: {
        type: String,
        allowedValues: ['Referent', 'Membre'],
        autoform: {
          options: {
            Referent: "Referent",
            Membre: "Membre"
      }
    }
  } 
});

// Define the schema
TeamSchema = new SimpleSchema({
  teamname: {
      type: String,
      regEx: /^[a-zA-Z-]{2,25}$/
  },
  members: {
      type: [Members]
  },
  wall : {
      type: String,
      optional: true
  }
});

// Validate an object against the schema
// obj = {title: "Ulysses", author: "James Joyce"};

Teams.attachSchema(TeamSchema);
