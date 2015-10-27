/*
** This is all accessible on client side only
*/

upload = {};

upload.validateFileType = function(file) {
    if (file.type.match(/image.*/)) {
      var allowedTypes = ['png', 'jpg', 'jpeg'];
      fileType = file.name.split('.');
      fileType = fileType[fileType.length - 1];
      if(allowedTypes.indexOf(fileType) != -1)
        return true;
    }
    return false;
}

upload.imageToDataUri = function(img, width, height) {

      var w = img.width;
      var h = img.height;
      var scale = Math.min(width / w, height / h);
      if (scale < 1) {
         w *= scale;
        h *= scale;
     }

        // create an off-screen canvas
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        // set its dimension to target size
        canvas.width = w;
        canvas.height = h;

        // draw source image into the off-screen canvas:
        ctx.drawImage(img, 0, 0, w, h);

        // encode image to data-uri with base64 version of compressed image
        return canvas.toDataURL();
}
