var location = new ReactiveVar(null);
var error = new ReactiveVar(null);
var loading = false;

// id = navigator.geolocation.watchPosition(success, error, options)
// Parameters
//
// success
// A callback function that takes a Position object as an input parameter.
// error Optional
//
// An optional callback function that takes a PositionError object as an input parameter.
//
// options Optional
// An optional PositionOptions object.

var positionOtions = {
  enableHighAccuracy: true,
  maximumAge: 0
};

var positionError = function (newError) {
  error.set(newError);
};

var success = function (newLocation) {
  location.set(newLocation);
  error.set(null);
};

var startloading = function () {
  if (!loading && navigator.geolocation) {
    navigator.geolocation.watchPosition(success, positionError, positionOtions);
    loading = true;
  }
};

Geoloc = {
  error: function () {
    startloading();
    return error.get();
  },
  currentLocation: function () {
    startloading();
    return location.get();
  },
  latLng: function () {
    var loc = Geoloc.currentLocation();
    if (loc) {
      return {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude
      };
    }
    return null;
  }
};
