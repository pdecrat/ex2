/*
** This is all accessible on server side only
*/

Notif = {};

notification = new SimpleSchema({
  id: {
    type: Number
  },
  content: {
    type: String
  },
  fromType: {
    type: String
  },
  projectId: {
    type: String
  },
  title: {
    type: String,
  },
  seen: {
    type: Boolean
  }
})

genLink = function(doc) {
    if (doc.fromType === "project")
      return "/project/view/" + doc.projectId;
    else if (doc.fromType === "mission")
      return "/project/view/" + doc.projectId + "/missions";
  return "#";
}


Notif.addNotification = function(idOrIds, doc) {
   var context = notification.newContext();
   notificationId = 1;
   newNotification = {
     id: 0,
     content: doc.content,
     title: doc.title,
     fromType: doc.fromType,
     projectId: doc.projectId,
     seen: false
  }
  if (context.validate(newNotification)) {
    newNotification.link = genLink(newNotification);
    if (typeof idOrIds === "string") {
      newNotification.id = Meteor.users.findOne({ _id: idOrIds },{fields: {notification: 1, _id: 0}}).notification.length + 1;
      Meteor.users.update({ _id: idOrIds }, { $addToSet: { notification: newNotification }});
    } else if (Array.isArray(idOrIds) && typeof idOrIds[0] === "string") {
      idOrIds.forEach(function(id) {
        newNotification.id = Meteor.users.findOne({ _id: id },{fields: {notification: 1, _id: 0}}).notification.length + 1;
        Meteor.users.update({ _id: id }, { $addToSet: { notification: newNotification }});
      });
    } else if (Array.isArray(idOrIds) && typeof idOrIds[0] === "object") {
      idOrIds.forEach(function(obj) {
        newNotification.id = Meteor.users.findOne({ _id: obj.id },{fields: {notification: 1, _id: 0}}).notification.length + 1;
        Meteor.users.update({ _id: obj.id }, { $addToSet: { notification: newNotification }});
      });
    }
    return true;
  }
  return false;
}
