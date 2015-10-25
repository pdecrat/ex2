Template.registerHelper('isInCharge', function() {
  return _.contains(this.inCharge, Meteor.user().username);
});

Template.registerHelper('goalReached', function() {
  return this.credits >= this.obj_backers;
})

Template.registerHelper('log', function(item) {
  console.log(item);
})

Template.registerHelper('timeAgo', function(datetime) {
  return moment(datetime).fromNow();
});

Template.registerHelper('pluralize', function(count, string) {
  string = count === 1 ? string : string + 's';
  return count + ' ' + string ;
});

Template.registerHelper('capitalize', function(string) {
  return string[0].toUpperCase() + string.substr(1);
});

Template.registerHelper('loggedIn', function() {
  return Meteor.userId();
});

Template.registerHelper('synopsis', function(string) {
  return string[0].toUpperCase() + string.substr(1, 70) + "...";
});
