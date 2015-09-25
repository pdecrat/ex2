Meteor.publish("wall", function (params) {
   id = params.attachedTo._id;
   type = params.attachedTo.type;
    return Wall.find({ attachedTo: {_id: id, type: type }});
});
