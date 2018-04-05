const request = require('request')

var GoogleMapsAPIkey = 'AIzaSyBGT9DtN2cOFyQW8CY5GD7cHYbeWsBoox8'

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

 async defer
src='http://maps.googleapis.com/maps/api/geocode/js?key=AIzaSyBGT9DtN2cOFyQW8CY5GD7cHYbeWsBoox8&callback=initMap'>


module.exports = {
    getAddress
};
