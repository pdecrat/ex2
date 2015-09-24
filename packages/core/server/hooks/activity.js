// Idea.after.insert(function(userId, doc) {
//   if (doc.members) {
//     doc.members.forEach(function(el) {
//       Activity.insert({ userId: el.id })
//       Notif.addNotification(el.id, {
//         content: "Une nouvelle idée a été ajouté : ",
//         title: doc.title,
//         fromType: "idea",
//         projectId: doc._id
//       })
//     })
//   }
// })
