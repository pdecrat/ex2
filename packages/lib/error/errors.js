Template.Errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Template.ErrorMessage.onRendered(function() {
  var error = this.data;
    Meteor.setTimeout(function () {
      Errors.remove(error._id);
    }, 3000);
});
