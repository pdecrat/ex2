/*
**  WALL INSERT :
**  1) Check if user is logged
**  2) Check if wall exists
**  3) Check if document is conform to Wall.postSchema and doc.owner to Wall.ownerSchema
**  4) Parse depending of wall.from
**     project, election : checks if user is member or not ( members is an array of object with id field)
**     mission : checks if user is member or not ( members is array of Strings representing the id )
**     idea : everyone can post
**  5) update wall and return
*/

Meteor.methods({
  post: function(target, content) {
    if (!this.userId)
      throw new Meteor.Error('not-logged-in', "Vous devez vous identifier pour poster un commentaire.");

    var user = Meteor.user();
    var actions = [
      {name: 'freeForMembers', params: {cost: 2}},
      {name: 'getXp', params: {xp: 25}},
      {name: 'notifyMembers', params: {
        message: user.username + " a posté un message."}},
      {name: 'post', params: {post: content}}
    ];

    Actions.do(user, actions, target);
  },
  //  insertPost: function(userId, wallId, doc) {
  //   if (!this.userId)
  //     return "Vous devez vous logged pour pouvoir poster";
  //   wall = Wall.findOne({key: wallId});
  //   if (_.isEmpty(wall))
  //     return "Ce mur n'existe pas";
  //   if (!Match.test(doc, Wall.postSchema) || !Match.test(doc.owner, Wall.ownerSchema))
  //     return "Un problème est survenu lors de la validation des champs"
  //   if (wall.from === 'project')
  //   {
  //     project = Project.findOne(wall.key);
  //     if (!_.isEmpty(project))
  //       check = _.some( project.members, function( el ) { return el.id === userId; } );
  //     if (check)
  //       return Wall.update(wall._id, { $addToSet: {posts: doc} });
  //   }
  //   else if (wall.from === 'idea')
  //       return Wall.update(wall._id, { $addToSet: {posts: doc} });
  //   else if (wall.from === 'election')
  //   {
  //     election = Election.findOne(wall.key);
  //     if (!_.isEmpty(election))
  //       check = _.some( election.members, function( el ) { return el.id === userId; } );
  //     if (check)
  //       return Wall.update(wall._id, { $addToSet: {posts: doc} });
  //   }
  //   else if (wall.from === 'mission')
  //   {
  //     mission = Mission.findOne(wall.key);
  //     if (!_.isEmpty(election))
  //       check = _.include(mission.members, userId)
  //     if (check)
  //       return Wall.update(wall._id, { $addToSet: {posts: doc} });
  //   }
  // }
});
