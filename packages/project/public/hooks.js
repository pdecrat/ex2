Project.after.insert(function () {
	var mission = {title: "Election", content: "Nous vous invitons a voter pour ta mere", members: this.members, missionType: "Mission", finish : false, creator: "Collectiv'z", project: this._id, objectives: "ton pere"};
	missionId = Mission.insert(mission);
});
