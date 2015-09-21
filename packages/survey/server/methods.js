Meteor.methods({
voteSurvey: function(surveyId, proposal) {
    survey = Survey.findOne(surveyId);
    user = Meteor.userId();
    if (survey.members.includes(user))
      console.log("t'as deja voté pour une proposition mon gars");
    else
      Survey.update( {_id : surveyId, "proposal.proposal": proposal}, {$inc : {
        "proposal.$.voted" : +1,
      }});
  }
});
