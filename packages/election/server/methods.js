var canHeVotes = function(members, userId, electionId) {
  for (var i=0; i < members.length; i++)
  {
    if (members[i].id === userId)
    {
      if (members[i].remainingVote > 0)
      {
          Election.update({_id : electionId, "members.id": userId},
              {$inc : {"members.$.remainingVote" : -1}});
          return true;
      }
    }
  }
  return false;
}


Meteor.methods({
voteCoordinateur: function(electionId, candidate) {
    election = Election.findOne(electionId);
    user = Meteor.userId();
    if (canHeVotes(election.members, user, electionId))
      Election.update( {_id : electionId, "members.id": candidate}, {$inc : {
        "members.$.voted" : +1,
        votes: +1
      }});
    else
      console.log("t'as plus assez de point pour voter mon gars");
  }
});
