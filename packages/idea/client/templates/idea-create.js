submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val(),
    obj_backers: $('#obj_backers').val(),
  }
  upload.getPic('insertIdea', pic.get(), data, 1600, 1600);
};

Template.ideaCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  },
  'change #file': function(e) {
    e.preventDefault();
    var file = e.currentTarget.files[0];
    pic.set(file);
  }
});

Template.ideaCreate.onCreated(function(){
  pic = new ReactiveVar(0);
});
