submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {title: $('#title').val(),
      content: $('#content').val()}
  Meteor.call('insertIdea', data, function(error) {
    if (error.error === 'logged-out-insert-idea') {
      Errors.throw(error.reason);
      FlowRouter.go('/login');
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
