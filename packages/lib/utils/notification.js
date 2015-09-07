Notif = {};

Notif.addNotification = function(idOrIds, doc) {
   var context = Schemas.notification.newContext();
   notificationId = 1;
   newNotification = {
     id: 0,
     content: doc.content,
     fromType: doc.fromType,
     fromId: doc.fromId,
     seen: false
  }
  if (context.validate(newNotification)) {
    if (typeof idOrIds === "string") {
      newNotification.id = Meteor.users.findOne({ _id: idOrIds }).notification.length + 1;
      Meteor.users.update({ _id: idOrIds }, { $addToSet: { notification: newNotification }});
    } else if (Array.isArray(idOrIds) && typeof idOrIds[0] === "string") {
      idOrIds.forEach(function(id) {
        newNotification.id = Meteor.users.findOne({ _id: id }).notification.length + 1;
        Meteor.users.update({ _id: id }, { $addToSet: { notification: newNotification }});
      });
    } else if (Array.isArray(idOrIds) && typeof idOrIds[0] === "object") {
      idOrIds.forEach(function(obj) {
        newNotification.id = Meteor.users.findOne({ _id: obj.id }).notification.length + 1;
        Meteor.users.update({ _id: obj.id }, { $addToSet: { notification: newNotification }});
      });
    }
    return true;
  }
  return false;
}
