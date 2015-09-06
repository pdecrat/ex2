Template.map.helpers({
  loc: function () {
    return Geoloc.latLng() || { lat: 0, lng: 0 };
  },
  error: function() {
    return Geoloc.error
  }
});
