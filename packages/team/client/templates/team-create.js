submitInsertForm = function(e, t) {
  e.preventDefault();

  var data = {
    name: $('#name').val(),
    description: $('#description').val()
  }

  if (data.name && data.description) {
    data.members = t.members.get();
    Meteor.call('insertTeam', data, function(err, res) {
      if (err)
        Errors.throw(err.reason);
      else {
        $('#name').val('');
        $('#description').val('');
      }
    });
  }
};

submitMember = function(e, t) {
  e.preventDefault();

  var member = $('#member').val();

  if (!_.some(t.members.get(), function (el) { return el.username === member; })) {
    Meteor.call('getUserInfo', member, function (err, res) {
      if (res) {
        var newMembers = t.members.get();
        newMembers.push(res);
        t.members.set(newMembers);
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
  var user = Meteor.users.findOne(Meteor.userId());

  self.members = new ReactiveVar([{id: user._id, username: user.username}]);
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
