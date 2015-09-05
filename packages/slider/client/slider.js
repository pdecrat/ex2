function sessionSave(name, index) {
  $("#" + name).fadeOut(function() {
    Template.instance().Sindex.set(index);
  }).fadeIn();
}

Template.slider.onCreated(function() {
  var self = this;
  self.Sindex = new ReactiveVar(0);
  self.Slimit = new ReactiveVar(false);
})

Template.slider.helpers({
  'doc': function() {
    var list = this.param.dataContext;
    if (list != undefined)
    {
      if (Template.instance().Slimit.get() === false) {
          Template.instance().Slimit.set(list.length - 1);
      }
      return list[Template.instance().Sindex.get()];
    }
    return null;
  },
  showArrow: function() {
    if (this.param.dataContext && this.param.dataContext.length > 1)
      return true;
    return false;
  }
})

Template.slider.events({
  'click #next': function(e, t) {
    var slider = Template.instance().Sindex.get();
    var limit = Template.instance().Slimit.get();
    if (slider + 1 > limit) {
      Template.instance().Sindex.set(0);
    } else {
      Template.instance().Sindex.set(slider + 1);
    }
   },
   'click #prev': function() {
     var slider = Template.instance().Sindex.get();
     var limit = Template.instance().Slimit.get();
     if (slider - 1 < 0 ) {
      Template.instance().Sindex.set(limit);
    } else {
      Template.instance().Sindex.set(slider - 1);
    }
   }
});
