submitInsertForm = function(e, t) {
  e.preventDefault();
  var data = {
    title: $('#title').val(),
  }
  if (data.title) {
    data.proposal = t.proposal.get();
    var target = {_id: t.data._id, type: t.data.type};
    Meteor.call('insertSurvey', data, target, function(err, res) {
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
  var option = {};
  option.name = proposal;
  option.voted = 0;
  newProposal.push(option);
  t.proposal.set(newProposal);
  proposal: $('#proposal').val('');
}

removeProposal = function (t, proposal) {

  var proposals = t.proposal.get();
  var index = proposals.indexOf(proposal);

  proposals.splice(index, 1);
  t.proposal.set(proposals);
}

Template.surveyCreate.onCreated(function() {
  var self = this;
  var user = Meteor.users.findOne(Meteor.userId());

  self.proposal = new ReactiveVar([]);
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
