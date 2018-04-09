//const fs = require('fs');

/*-------------------------DICTIONARY OF COUNTRIES AND PLACES---------------------------------------------------*/

var Countries= {Canada: {center: {
                            coor: {lat: 51.4968, lng: -100.9281}
                            },
                         locations: [{
                             title:'Banff National Park',
                             coor: {
                                 lat: 51.4968,
                                 lng: -115.9281},
                             picture: "pictures/banffpark.jpg"},{
                            title: 'CN Tower',
                             coor: {
                                    lat: 43.6426,
                                    lng: -79.3871},
                             picture: "pictures/cntower.jpg"},{
                               title: 'Stanley Park',
                             coor: {
                                    lat: 49.3017,
                                    lng: -123.1417},
                             picture: "pictures/stanleypark.jpg"}],
                         zoom: 4
                        },
                USA: {center: {
                            coor: {lat: 38.4968, lng: -100}
                            },
                         locations: [{
                           title: 'Central Park',
                             coor: {
                                 lat: 40.7829,
                                 lng: -73.9654},
                             picture: "pictures/centralpark.jpg"},{
                            title: 'Golden Gate Bridge',
                             coor: {
                                    lat: 37.8199,
                                    lng: -122.4783},
                             picture: "pictures/goldengatebridge.jpg"},{
                            title: 'Statue of Liberty',
                             coor: {
                                    lat: 40.6892,
                                    lng: -74.0445},
                             picture: "pictures/statueofliberty.jpg"}],
                      zoom: 4
                        },
                Russia: {center: {
                            coor: {lat: 58.7520, lng: 33.6175}
                            },
                         locations: [{
                           title: 'Moscow Kremlin',
                             coor: {
                                 lat: 55.7520,
                                 lng: 37.6175},
                             picture: "pictures/moscowkremlin.jpg"},{
                            title: 'Red Square',
                             coor: {
                                    lat: 55.7539,
                                    lng: 37.6208},
                             picture: "pictures/redsquare.jpg"},{
                            title: 'Hermitage Museum',
                             coor: {
                                    lat: 59.9398,
                                    lng: 30.3146},
                             picture: "pictures/hermitage.jpg"}],
                         zoom: 5
                        },
                China: {center: {
                            coor: {lat: 39.95, lng: 116.3}
                            },
                         locations: [{
                           title: 'Tiananmen Square',
                             coor: {
                                 lat:39.9055,
                                 lng: 116.3976},
                             picture: "pictures/tiananmensquare.jpg"},{
                            title: 'Forbidden City',
                             coor: {
                                    lat: 39.9163,
                                    lng: 116.3972},
                             picture: "pictures/forbiddencity.jpg"},{
                            title: 'Summer Palace',
                             coor: {
                                    lat: 40.0000,
                                    lng: 116.2755},
                             picture: "pictures/summerpalace.jpg"}],
                         zoom: 11
                        },
                Japan: {center: {
                            coor: {
                              lat:35.3394,
                              lng: 137.7292}
                            },
                         locations: [{
                           title: 'Kinkaku-ji',
                             coor: {
                                 lat:35.0394,
                                 lng: 135.7292},
                             picture: "pictures/kinkakuji.jpg"},{
                            title: 'Senso-ji',
                             coor: {
                                    lat: 35.7148,
                                    lng: 139.7967},
                             picture: "pictures/sensoji.jpg"},{
                            title: 'Tokyo Tower',
                             coor: {
                                    lat: 35.6586,
                                    lng: 139.7454},
                             picture: "pictures/tokyotower.jpg"}],
                         zoom: 7
                        },
                Mexico: {center: {
                            coor: {lat:19.3394,
                                 lng: -93.7292}
                            },
                         locations: [{
                           title: 'Pyramid of the Magician',
                             coor: {
                                 lat:20.359444,
                                 lng: -89.771389},
                             picture: "pictures/uxmal.jpg"},{
                            title: 'Coba',
                             coor: {
                                    lat: 20.49472,
                                    lng: -87.736111},
                             picture: "pictures/coba.jpg"},{
                            title: 'Monte Alban',
                             coor: {
                                    lat: 17.043889,
                                    lng: -96.767778},
                             picture: "pictures/montealban.jpg"}],
                         zoom: 6
                        },

            }



/*---------------------FUNCTIONS-------------------------------*/

/*--------------------------Save locations-----------------------------*/
function Savelocations(button,location){
  name = document.getElementById('email').innerHTML
  fs.writeFile(name+'.json', 'utf8', (err, data) => {
    if (err){
      console.log(err);
    } else {
      obj = JSON.parse(data);
      obj.saved_locations.push({name: location})
    }
  })
}

/*---------------------Initializes a map-------------------------------------*/

 function initMap() {
        var marker =""
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 51.4968, lng: -115.9281}
        });

 }

function addInfoWindow(marker, message) {

            var infoWindow = new google.maps.InfoWindow({
                content: message
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }

/*-------------------------------Changes the map markers-------------------------------*/

function changeMap(center, locations, zoom) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: zoom,
          center: center
        });

        var locations = locations;

        for (var i =0; i < locations.length; i++){
         marker = new google.maps.Marker({
            position: locations[i].coor,
            animation: google.maps.Animation.DROP,
            map: map
          });

          addInfoWindow(marker,"<p><b>" + locations[i].title + "</b></p>")
        }
      }

/*------------------------------------Changes the images on the right side---------------------------*/

function changeImage(div, image){
  if (div == 0){
    document.getElementById('firstcountry').style.backgroundImage = "url(" + image + ")"}
  else if (div == 1){
    document.getElementById('secondcountry').style.backgroundImage = "url(" + image + ")"}
  else if (div == 2){
    document.getElementById('thirdcountry').style.backgroundImage = "url(" + image + ")"}

}

/*-----------------------------COUNTRY BUTTONS-----------------------------------*/

document.getElementById('Canada').addEventListener("click", function(){
    changeMap(Countries.Canada.center.coor,Countries.Canada.locations,Countries.Canada.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.Canada.locations[i].picture)
    }
});

document.getElementById('USA').addEventListener("click", function(){
    changeMap(Countries.USA.center.coor,Countries.USA.locations,Countries.USA.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.USA.locations[i].picture)
    }
});

document.getElementById('Russia').addEventListener("click", function(){
    changeMap(Countries.Russia.center.coor,Countries.Russia.locations, Countries.Russia.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.Russia.locations[i].picture)
    }
});

document.getElementById('China').addEventListener("click", function(){
    changeMap(Countries.China.center.coor,Countries.China.locations, Countries.China.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.China.locations[i].picture)
    }
});

document.getElementById('Japan').addEventListener("click", function(){
    changeMap(Countries.Japan.center.coor,Countries.Japan.locations, Countries.Japan.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.Japan.locations[i].picture)
    }
});

document.getElementById('Mexico').addEventListener("click", function(){
    changeMap(Countries.Mexico.center.coor,Countries.Mexico.locations, Countries.Mexico.zoom)
    for (var i = 0; i < 3; i++){
        changeImage(i, Countries.Mexico.locations[i].picture)
    }
});

/*----------------------------------makes info for clicking on picture-------------*/

/*
function showMe(whichdiv, whicharrow){
    var info = whichdiv;
    var pointer = whicharrow;
    if (info.style.display == "none" && pointer.style.display == "none") {
        info.style.display = "block";
        pointer.style.display = "block";
    } else {
        info.style.display = "none";
        pointer.style.display = "none";
    }
}
*/

var showfirstcountry = document.getElementById("firstcountryinfo")
        showfirstcountry.addEventListener("mouseover", function() {
            showfirstcountry.style.display="block";
        });
        showfirstcountry.addEventListener("mouseleave", function() {
            showfirstcountry.style.display="none";
        });

var showsecondcountry = document.getElementById("secondcountryinfo")
        showsecondcountry.addEventListener("mouseover", function() {
            showsecondcountry.style.display="block";
        });
        showsecondcountry.addEventListener("mouseleave", function() {
            showsecondcountry.style.display="none";
        });

var showthirdcountry = document.getElementById("thirdcountryinfo")
        showthirdcountry.addEventListener("mouseover", function() {
            showthirdcountry.style.display="block";
        });
        showthirdcountry.addEventListener("mouseleave", function() {
            showthirdcountry.style.display="none";
        });
