submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    title: $('#title').val(),
  }

  if (data.title) {
    data.proposal = t.proposal.get();
    Meteor.call('insertSurvey', data, function(err, res) {
      if (err)
        Errors.throw(err.reason);
      else {
        $('#title').val('');
      }
    });
  }
};

submitProposal = function(e, t) {
  e.preventDefault();

  var proposal = $('#proposal').val();
  var newProposal = t.proposal.get();
  newProposal.voted = 0;
  t.proposal.set(newProposal);
  proposal: $('#proposal').val('');
}

removeProposal = function (t, proposal) {
  var proposals = t.proposals.get();
  var index = proposals.indexOf(proposal);

  proposals.splice(index, 1);
  t.proposals.set(proposals);
}

Template.surveyCreate.onCreated(function() {
  var self = this;
  var user = Meteor.users.findOne(Meteor.userId());

  self.proposal = new ReactiveVar([{}]);
})

Template.surveyCreate.helpers({
  proposal: function() {
    return Template.instance().proposal.get();
  }
});

Template.surveyCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
    submitInsertForm(e, t);
  },
  'click #submit-proposal': function(e, t) {
    submitProposal(e, t);
  },
  'click #remove-proposal': function(e, t) {
    e.preventDefault();
    removeProposal(t, this);
  }
});
