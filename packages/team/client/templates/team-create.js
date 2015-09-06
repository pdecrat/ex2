submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    name: $('#name').val(),
    description: $('#description').val()
  }

  if (data.name && data.description) {
    Meteor.call('insertTeam', data, function(err, res) {
      if (err)
        Errors.throw(err.reason)
    });
  }
};

Template.teamCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  }
});
