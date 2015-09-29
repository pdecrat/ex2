submitForm = function(e, t) {
  e.preventDefault();
  var data = {name: $('#name').val(),
      description: $('#description').val()}
  Meteor.call('updateIdea', data, t.data._id);
};

Template.IdeaUpdate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitForm(e, t);
  },
  'click #submit': function(e, t) {
      submitForm(e, t);
  }
});

Template.IdeaUpdate.onRendered(function (){
  $('#name').val(this.data.name);
  $('#description').val(this.data.description);
});
