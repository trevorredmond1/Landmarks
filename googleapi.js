const request = require('request')

var GoogleMapsAPIkey = 'AIzaSyBGT9DtN2cOFyQW8CY5GD7cHYbeWsBoox8'

function initMap() {
  var marker =""
  var locations = [{lat: 51.4968, lng: -115.9281},{lat: 43.6426, lng: -79.3871},{lat: 49.3017, lng: -123.1417},{lat: 40.7829, lng: -73.9654},{lat: 37.8199, lng: -122.4783},{lat: 40.6892, lng: -74.0445}];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 51.4968, lng: -115.9281}
  });

  for (var i =0; i < locations.length; i++){
  marker = new google.maps.Marker({
    position: locations[i],
    map: map
  });
}
}

module.exports = {
    getAddress
};
