Template.missionView.helpers({
 mission: function() {
  return this[0];
},
isVote: function(s) {
  if(s === "Vote")
    return true;
  return false;
}
});
