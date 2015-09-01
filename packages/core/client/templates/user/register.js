submitRegisterForm = function(e, t) {
  e.preventDefault();

  var email = $('#email').val(),
      userName = $('#user-name').val(),
      firstName = $('#first-name').val(),
      lastName = $('#last-name').val(),
      password = $('#password').val(),
      passwordAgain = $('#password-again').val();

 var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
 }
 var email = trimInput(email);

 var isValidPassword = function(pwd, pwd2) {
    if (pwd === pwd2) {
      return pwd.length >= 6 ? true : false;
    } else {
      return Errors.throw("Passwords don't match, please try again")
    }
  }

 if (isValidPassword(password, passwordAgain)) {
    Accounts.createUser({
        username: userName,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
   }, function(error) {
      if (error) {
         console.log('Error: ' + error.reason);
      } else {
         FlowRouter.go('/');
      }
   });
 }
 return false;
}

Template.registerDisplay.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitRegisterForm(e, t);
  },
  'click #register-button': function(e, t) {
      submitRegisterForm(e, t);
  }
});
