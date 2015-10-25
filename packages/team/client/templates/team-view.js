Template.TeamView.onCreated(function() {
  var self = this;
  var id = self.data._id;

  self.autorun(function() {
    self.subscribe('teamSub', {id: id, action: 'View'});
  })
})

Template.TeamView.helpers({
  'team': function() {
    return Team.findOne({_id: this._id});
  }
})
