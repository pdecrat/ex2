submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val(),
    project: t.data
  }

  Meteor.call('insertMission', data, function(err, res) {
    if (err)
        Errors.throw(err.reason)
  });
};

Template.MissionCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  }
});
