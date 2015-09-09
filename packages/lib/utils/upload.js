/*
** This is all accessible on client side only
**
*/

upload = {};

validateFileType = function(file) {
    if (file.type.match(/image.*/)) {
      var allowedTypes = ['png', 'jpg', 'jpeg'];
      fileType = file.name.split('.');
      fileType = fileType[fileType.length - 1];
      if(allowedTypes.indexOf(fileType) != -1)
        return true;
    }
    return false;
}

upload.resizeImage = function(dataUrl, max_height, max_width) {
  var img = document.createElement("img");
  img.src = dataUrl;

  var width = img.width;
  var height = img.height;
  var scale = Math.min(max_height / width, max_width / height);
  if (scale < 1) {
    height *= scale;
    width *= scale;
  }
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
}

upload.getPic = function(type, pic, obj, max_height, max_width) {
  if (validateFileType(pic)) {
      var reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.addEventListener('load', function() {
        var canvas = resizeImage(this.result, max_height, max_width);
        obj.canvas = canvas.toDataURL("image/png");
        Meteor.call(type, obj);
      }, false);
  }
}

// upload.saveImageToProfile = function(canvas) {
//   var resizedDataUrl = canvas.toDataURL("image/png");
//   var isSaved = Meteor.users.update(Meteor.userId(), {$set: {"profile.pic": resizedDataUrl}});
//   if (!isSaved)
//     Errors.throw("A problem occured while saving your Image.. please try again");
// }


// Template.upload.events({
//   'change input': function(e) {
//     e.preventDefault();
//
//     var pic = e.currentTarget.files[0];
//     if (validateFileType(pic)) {
//         var reader = new FileReader();
//         reader.readAsDataURL(pic);
//         reader.addEventListener('load', function() {
//           var canvas = resizeImage(this.result, 400, 400);
//           // saveImage(canvas);
//         }, false);
//     } else {
//       Errors.throw('File extension must be .png, .jpg or .jpeg');
//     }
//   }
// });

// Template.upload.helpers({
//   hasPic: function() {
//     var profile = Meteor.user().profile;
//     if (profile.pic !== undefined && profile.pic !== "")
//       return "Update your profile picture";
//     return "Add a profile picture";
//   }
// })
