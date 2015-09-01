Characters = new Mongo.Collection('character');

Stuff = new SimpleSchema({
    name: {
        type: String
    },
    carac: {
        type: String
    },
    on: {
        type: Boolean
  	} 
});

// Define the schema
CharacterSchema = new SimpleSchema({
  userID: {
      type: String,
      optional: true
  },
  classe : {
     type: String,
        allowedValues: ['Magicien', 'Guerrier'],
        autoform: {
          options: {
            Magicien: "Magicien",
            Guerrier: "Guerrier"
      	  }
    	},
      optional: true
  },
  gold: {
  	  type: Number
  },
  inventory: {
  	  type : [Stuff],
  	  optional: true
  },
  xp: {
  	  type: Number
  },
  lvl: {
  	  type: Number
  }
});

// Validate an object against the schema
// obj = {title: "Ulysses", author: "James Joyce"};

Characters.attachSchema(CharacterSchema);
