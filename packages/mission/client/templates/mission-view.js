Template.missionViewDisplay.onCreated(function() {
 var self = this;
 console.log(this)
 var id = self.data.id;
 self.autorun(function() {
  self.subscribe('mission', { _id: id});
 });
 self.getMission = function() {
  return Mission.findOne({ _id: id });
 }
});

Template.missionViewDisplay.helpers({
 mission: function() {
  var mission = Template.instance().getMission();
  return mission;
 },
 subTemplate: function() {
  var mission = Template.instance().getMission();
  var templateName = "mission" + mission.missionType
  if(!Blaze.isTemplate(Template[templateName]))
    return "not-found";
  return templateName;

 }
});