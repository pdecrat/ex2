Project.after.insert(function (userId, doc) {
	members = new Array();
	doc.members.forEach(function(element) {
    var memberProject = element.id;
    members.push(memberProject);
  	});
	var mission = {title: "Election", content: "Nous vous invitons a voter pour un coordinateur", members: members, missionType: "Vote", finish : false, project: doc._id, owner: doc.owner};
	missionId = Mission.insert(mission);
});
