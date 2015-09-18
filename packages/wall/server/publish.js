Meteor.publish("wall", function (params) {
    return Wall.find({key: params.key});
});
