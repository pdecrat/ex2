Meteor.publish("Election", function (params) {
  if (params.action == 'list')
    return Collectivz.findAll('Election');
  return Collectivz.findAll(capitalize(params.type), params.id);
});
