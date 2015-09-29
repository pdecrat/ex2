Meteor.methods({
  insertSurvey: function(data) {
    if (Meteor.userId()) {
      var exist = Survey.findOne( {title: data.title });

      if (!exist) {
        surveyId = Survey.insert(data);
        var wall = {key: surveyId, from: "survey"};
        Wall.insert(wall);
      }
    }
  },
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
