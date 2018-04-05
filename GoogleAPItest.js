<!DOCTYPE html>
<html>
  <head>
    <style>
      #map {
        height: 400px;
        width: 400px;
       }
    </style>
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var marker =""
        var uluru = [{lat: -25.363, lng: 131.044},{lat: -33.857, lng: 151.215}];
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: -25.363, lng: 131.044}
        });

        for (var i =0; i < uluru.length; i++){
        marker = new google.maps.Marker({
          position: uluru[i],
          map: map
        });
      }
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGT9DtN2cOFyQW8CY5GD7cHYbeWsBoox8&callback=initMap">
    </script>
  </body>
</html>
