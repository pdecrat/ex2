Template.notification.events({
  'click #goTo': function() {
    console.log("go to")
  },
  'click #markAsSeen': function() {
    Meteor.call('markAsSeen', this.id);
  }
})

Template.notification.helpers({
  'notSeenNotif': function() {
      return _.where(Meteor.user().notification, {seen: false})
  },
  'count': function() {
      return _.where(Meteor.user().notification, {seen: false}).length
  }
})
