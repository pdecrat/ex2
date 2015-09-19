Meteor.publish("mission", function (params) {
  if (params) {
    if (params._id)
      return Mission.find({_id: params._id});
    return Mission.find({project: params.key});
  }
})

if (Mission.find().count() == 0)
{
  project = Project.findOne({ title: "Mes premiers pas avec Collectivz"});
  projectId = project._id;
  mission = {
    title: "Commenter une idée",
    content: "Pour commencer pourquoi ne pas examiner les idées proposées par d'autres participants et donner votre avis?",
    project: projectId
  },
  Mission.insert(mission);
  mission = {
    title: "Remplir mon profil",
    content: "Remplir votre profil permet de vous donner plus de visibilité et d'identifier les projets qui peuvent vous convenir le mieux!",
    project: projectId
  },
  Mission.insert(mission);
  mission = {
    title: "Publier une idée",
    content: "En publiant une idée, vous pouvez trouver d'autres membres qui vont vous aider à la transformer en réalité!",
    project: projectId
  },
  Mission.insert(mission);
  mission = {
    title: "Rejoindre un projet",
    content: "Rejoingnez un projet et changez le Monde avec une communauté de gens qui partagent vos intérêts!",
    project: projectId
  },
  Mission.insert(mission);
}
