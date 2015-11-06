Template.InterestEdit.onCreated(function(){
  self = this;

  self.submitUpdateForm = function(e, t) {
    e.preventDefault();
    var data = {
      interest: $('#interest').val(),
    }
    Meteor.call('updateInterest', data);
    $('#interest').val('');
  };
});

Template.InterestEdit.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      Template.instance().submitUpdateForm(e, t);
  },
  'click #submit': function(e, t) {
      Template.instance().submitUpdateForm(e, t);
  }
});
