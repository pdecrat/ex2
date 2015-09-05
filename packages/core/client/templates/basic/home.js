Template.homeDisplay.events({
  'click .giveToken': function() {
    Meteor.call('giveToken', Meteor.userId(), 'superior');
  }
})
