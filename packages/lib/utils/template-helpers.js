Template.registerHelper('isOwner', function() {
  return Meteor.userId() === this.owner.id;
});

Template.registerHelper('isAdmin', function() {
    return Roles.isAdmin(Meteor.users.findOne( {_id: Meteor.userId()} ).roles);
});

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
