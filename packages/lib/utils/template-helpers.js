Template.registerHelper('isOwner', function() {
  return Meteor.userId() === this.author;
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
