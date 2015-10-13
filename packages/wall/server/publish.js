Meteor.publish("wallSub", function (params) {
   var id = params.attachedTo._id;
   var type = params.attachedTo.type;
    return Wall.find({ attachedTo: {_id: id, type: type }});
});
