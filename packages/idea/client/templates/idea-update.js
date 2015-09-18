submitForm = function(e, t) {
  e.preventDefault();
  var data = {title: $('#title').val(),
      content: $('#content').val()}
  Meteor.call('updateIdea', data, t.data._id);
};

Template.ideaUpdate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitForm(e, t);
  },
  'click #submit': function(e, t) {
      submitForm(e, t);
  }
});

Template.ideaUpdate.onRendered(function (){
  $('#title').val(this.data.title);
  $('#content').val(this.data.content);
});
