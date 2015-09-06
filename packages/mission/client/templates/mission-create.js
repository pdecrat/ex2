submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val(),
    missionType: $('#missionType option:selected').val(),
    project: t.data
  }
  console.log(this)

  Meteor.call('insertMission', data, function(err, res) {
    if (err)
        Errors.throw(err.reason)
  });
};

Template.missionCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  }
});
