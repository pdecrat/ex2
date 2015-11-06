Template.SkillEdit.onCreated(function(){
  self = this;

  self.submitUpdateForm = function(e, t) {
    e.preventDefault();
    var data = {
      name: $('#skill').val(),
      level: 0,
    }
    Meteor.call('updateSkill', data);
    $('#skill').val('');
  };
});

Template.SkillEdit.events({
  'keypress input': function(e, t) {
    if (event.charCode === 13)
      Template.instance().submitUpdateForm(e, t);
  },
  'click #submit': function(e, t) {
      Template.instance().submitUpdateForm(e, t);
  }
});
