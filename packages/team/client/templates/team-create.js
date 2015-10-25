submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    name: $('#name').val(),
    description: $('#description').val()
  };
  var user = Meteor.user();

  if (data.name && data.description) {
    data.members = t.members.get();
    console.log(data);
    Meteor.call('insertTeam', data, function(err, res) {
      if (err)
        Errors.throw(err.reason);
      else {
        $('#name').val('');
        $('#description').val('');
        t.members.set([user.username]);
      }
    });
  }
};

submitMember = function(e, t) {
  e.preventDefault();

  var member = $('#member').val();
  var members = t.members.get();

  if (!_.contains(members, member)) {
    Meteor.call('isUser', member, function(err, res) {
      if (res === true) {
        members.push(member);
        t.members.set(members);
        $('#member').val('');
      } else {
        Errors.throw('Ce nom ne correspond à personne.');
      }
    });
  } else {
    Errors.throw("L'utilisateur est déjà invité.");
  }
}

removeMember = function (t, member) {
  var members = t.members.get();
  var index = members.indexOf(member);

  members.splice(index, 1);
  t.members.set(members);
}

Template.TeamCreate.onCreated(function() {
  var self = this;
  var user = Meteor.user();

  self.members = new ReactiveVar([user.username]);
})

Template.TeamCreate.helpers({
  members: function() {
    return Template.instance().members.get();
  }
});

Template.TeamCreate.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      submitInsertForm(e, t);
  },
  'click #submit': function(e, t) {
    submitInsertForm(e, t);
  },
  'click #submit-member': function(e, t) {
    submitMember(e, t);
  },
  'click #remove-member': function(e, t) {
    e.preventDefault();
    if (this.id === Meteor.userId())
      Errors.throw("Vous ne pouvez vous retirer de l'équipe.");
    else
      removeMember(t, this);
  }
});
