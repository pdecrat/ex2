Template.missions.helpers({
  'isList': function() {
    return (this.length > 1) ? true : false;
  },
  'mission': function() {
    console.log(this[0])
    return this[0];
  },
  'type': function() {
    return "mission" + this[0].missionType;
  }
})
