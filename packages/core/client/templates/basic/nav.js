Template.nav.helpers({
  'count': function() {
    if (userSub.ready())
      return _.where(Meteor.user().notification, {seen: false}).length
    return null
  }
})
