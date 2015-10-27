Template.IdeaCreate.onCreated(function(){
  self = this;
  self.picture = new ReactiveVar(null);
  self.uploadInfo = new ReactiveVar(null);

  self.submitInsertForm = function(e, t) {
    e.preventDefault();
    var data = {
      name: $('#name').val(),
      description: $('#description').val(),
      obj_backers: $('#obj_backers').val(),
      images: t.picture.get(),
      type: 'Idea',
      credits: 0
    }
    Meteor.call('insertIdea', data);
    t.uploadInfo.set(null)
    t.picture.set(null);
    $('#description').val('');
    $('#obj_backers').val('');
    $('#name').val('');
    $('#file').val(null);
    $('#myModal').modal('hide');
  };
});

Template.IdeaCreate.helpers({
  'progress': function() {
     obj = Template.instance().uploadInfo.get();
     if (!obj || obj.total === 0)
        return 0;
     return (obj.loaded * 100 / obj.total);
  }
})

Template.IdeaCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      Template.instance().submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
      Template.instance().submitInsertForm(e, t);
  },
  'change #file': function(e, t) {
    e.preventDefault();
    function resizeImage() {
        var newDataUri = upload.imageToDataUri(this, 200, 200);
        t.picture.set({thumbnail: newDataUri, original: this.src});
    }
    var file = e.currentTarget.files[0];
    if (upload.validateFileType(file)) {
       var reader = new FileReader();
       reader.addEventListener('progress', function(e) {
           t.uploadInfo.set({ loaded: e.loaded, total: e.total })
       }, false)
       reader.addEventListener('load', function(e) {
         var img = new Image;
         img.onload = resizeImage;
         img.src = e.currentTarget.result;
       }, false);
       reader.readAsDataURL(file);
   } else {
      Errors.throw("Image must be png, jpg or jpeg")
   }
  }
});
