submitLoginForm = function(e, t) {
  e.preventDefault();
  // Getting values from fields on page
  var username = $('#login-username').val(),
      password = $('#login-password').val();

  Meteor.loginWithPassword(username, password, function(error) {
      if (error) {
       Errors.throw('Invalid Username or Password')
      } else {
        FlowRouter.go('/Home');
      }
  });
  return false;
}

Template.Login.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitLoginForm(e, t);
  },
  'click #login-button': function(e, t) {
    submitLoginForm(e, t);
   },
});
