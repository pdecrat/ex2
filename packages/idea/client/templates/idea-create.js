submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val(),
    obj_backers: $('#obj_backers').val()
  }
  Meteor.call('insertIdea', data, function(err, res) {
    if (err)
        Errors.throw(err.reason)
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
