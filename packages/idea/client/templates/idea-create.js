submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
    content: $('#content').val(),
    obj_backers: $('#obj_backers').val(),
    canvas: t.pic.get(),
    type: 'Idea',
    credits: 0
  }
  Meteor.call('insertIdea', data);
  t.pic.set(null);
  t.p.set(null)
};

Template.ideaCreate.helpers({
  'progress': function() {
     obj = Template.instance().p.get();
     if (!obj || obj.total === 0)
        return 0;
     return (obj.loaded * 100 / obj.total);
  }
})

Template.ideaCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      submitInsertForm(e, t);
  },
  'change #file': function(e, t) {
    e.preventDefault();
    var file = e.currentTarget.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('progress', function(e) {
        t.p.set({ loaded: e.loaded, total: e.total })
    }, false)
    reader.addEventListener('load', function() {
      var canvas = upload.resizeImage(this.result, 400, 400);
      canvas.toDataURL("image/png");
      t.pic.set(canvas.toDataURL("image/png"));
    }, false);

  }
});

Template.ideaCreate.onCreated(function(){
  self = this;
  self.pic = new ReactiveVar(null);
  self.p = new ReactiveVar(null);
});
