var Countries= {Canada: {center: {
                            coor: {lat: 51.4968, lng: -100.9281}
                            },
                         location1: {
                            coor: {lat: 51.4968, lng: -115.9281},
                            picture: "picture/banffpark.jpg"},
                         location2: {
                            coor: {lat: 43.6426, lng: -79.3871},
                            picture: "picture/cntower.jpg"},
                         location3: {
                            coor: {lat: 49.3017, lng: -123.1417},
                            picture: "picture/stanleypark.jpg"},
                        }
               }




/*---------------------Initializes a map-------------------------------------*/

 function initMap() {
        var marker =""
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 51.4968, lng: -115.9281}
        });

 }

function changeMap(center, location1, location2, location3) {
        var marker =""
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: center
        });

        var locations = [location1, location2, location3];

        for (var i =0; i < locations.length; i++){
        marker = new google.maps.Marker({
          position: locations[i],
          map: map
        });
      }
      }

function changeImage(div, image){
  if (div == 0){
    document.getElementById('firstcountry').style.image = "url(" + image + ")"}
  }
  else if (div == 1){
    document.getElementById('secondcountry').style.image = "url(" + image + ")"}
  }
  else if (div == 2){
    document.getElementById('thirdcountry').style.image = "url(" + image  + ")"}
  }

document.getElementById('Canada').addEventListener("click", function(){
    changeMap(Countries.Canada.center.coor,Countries.Canada.location[1].coor,Countries.Canada.location[2].coor, Countries.Canada.location[3].coor)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.Canada.locations[i].picture)
    }
});
