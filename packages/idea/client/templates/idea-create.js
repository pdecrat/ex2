submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val()
  }
  Meteor.call('insertIdea', data, function(err, res) {
    if (err) {
      if (err.reason === "Internal server error")
        Errors.throw("Duplicate title")
      else
        Errors.throw(err.reason)
    }
  });
};

Template.ideaCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  }
});
