Project.after.insert(function (userId, doc) {
	var mission = {title: "Election", content: "Nous vous invitons a voter pour ta mere", members: doc.members, missionType: "Vote", finish : false, project: doc._id, owner: doc.owner};
	missionId = Mission.insert(mission);
});
