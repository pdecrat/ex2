Template.Missions.helpers({
  'isList': function() {
    return (this.length > 1) ? true : false;
  },
  'mission': function() {
    return this[0];
  },
})
