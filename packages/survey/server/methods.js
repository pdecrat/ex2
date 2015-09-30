Meteor.methods({
  gidits: function(target) {
    var user = Meteor.user();
    var actions = [
      {name: 'giveCredits', params: {cost: 1}},
      {name: 'getXp', params: {xp: 10}},
    ];

    Actions.do(user, actions, target);
  },
  insertSurvey: function(data, target) {
    var user = Meteor.user();
    if (user) {
      var actions = [
        {name: 'survey', params: data}
      ]
      Actions.do(user, actions, target);
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
