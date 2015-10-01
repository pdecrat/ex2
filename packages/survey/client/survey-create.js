
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
  var context = self.data;
  var user = Meteor.users.findOne(Meteor.userId());

  self.proposal = new ReactiveVar([]);

  self.submitInsertForm = function() {
    var data = {
      title: $('#title').val(),
    }

    if (data.title) {
      data.proposal = self.proposal.get();
      var target = {_id: context._id, type: context.type};
      console.log(data, target);

      Meteor.call('insertSurvey', data, target, function(err, res) {
        if (err)
          Errors.throw(err.reason);
        else {
          $('#title').val('');
        }
      });
    }
  };

})

Template.surveyCreate.helpers({
  proposal: function() {
    return Template.instance().proposal.get();
  }
});

Template.surveyCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      Template.instance().submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
    e.preventDefault();
    Template.instance().submitInsertForm(e, t);
  },
  'click #submit-proposal': function(e, t) {
    e.preventDefault();
    submitProposal(e, t);
  },
  'click #remove-proposal': function(e, t) {
    e.preventDefault();
    removeProposal(t, this);
  }
});
