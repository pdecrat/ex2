Template.Missions.helpers({
  'isList': function() {
    return (this.length > 1) ? true : false;
  },
  'mission': function() {
    return this[0];
  },
  'type': function() {
    return "mission" + this[0].missionType;
  }
})
