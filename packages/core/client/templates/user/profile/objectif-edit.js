Template.ObjectifEdit.onCreated(function(){
  self = this;

  self.submitUpdateForm = function(e, t) {
    e.preventDefault();
    var data = {
      objectif: $('#objectif').val(),
    }
    Meteor.call('updateObjectif', data);
    $('#objectif').val('');
  };
});

Template.ObjectifEdit.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      Template.instance().submitUpdateForm(e, t);
  },
  'click #submit': function(e, t) {
      Template.instance().submitUpdateForm(e, t);
  }
});
