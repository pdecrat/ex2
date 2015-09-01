submitForm = function(e, t) {
  e.preventDefault();

  var data = {title: $('#title').val(),
      content: $('#content').val()}
  Meteor.call('insertIdea', data);
};

Template.ideaCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitForm(e, t);
  },
  'click #submit': function(e, t) {
      submitForm(e, t);
  }
});
