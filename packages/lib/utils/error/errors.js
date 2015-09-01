Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Template.errorMessage.onRendered(function() {
  var error = this.data;
  if (Meteor.isServer) {
    Meteor.setTimeout(function () {
      Errors.remove(error._id);
    }, 3000);
  }
});
