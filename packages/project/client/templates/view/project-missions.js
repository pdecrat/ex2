Template.missions.helpers({
  'isList': function() {
    return (this.length > 1) ? true : false;
  },
  'projectId': function() {
    return this[0].project
  }
})
