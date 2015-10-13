Template.Nav.helpers({
  'count': function() {
    if (Meteor.user())
      return _.where(Meteor.user().notification, {seen: false}).length
    return null
  }
})
