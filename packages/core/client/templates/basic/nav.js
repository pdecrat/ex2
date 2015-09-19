Template.nav.helpers({
  'count': function() {
    if (userSub.ready() && Meteor.user())
      return _.where(Meteor.user().notification, {seen: false}).length
    return null
  }
})
