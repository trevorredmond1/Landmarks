/*-------------------------DICTIONARY OF COUNTRIES AND PLACES---------------------------------------------------*/

var Countries= {Canada: {center: {
                            coor: {lat: 51.4968, lng: -100.9281}
                            },
                         locations: [{
                             coor: {
                                 lat: 51.4968,
                                 lng: -115.9281},
                             picture: "pictures/banffpark.jpg"},{
                             coor: {
                                    lat: 43.6426,
                                    lng: -79.3871},
                             picture: "pictures/cntower.jpg"},{
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
                             coor: {
                                 lat: 40.7829,
                                 lng: -73.9654},
                             picture: "pictures/centralpark.jpg"},{
                             coor: {
                                    lat: 37.8199,
                                    lng: -122.4783},
                             picture: "pictures/goldengatebridge.jpg"},{
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
                             coor: {
                                 lat: 55.7520,
                                 lng: 37.6175},
                             picture: "pictures/moscowkremlin.jpg"},{
                             coor: {
                                    lat: 55.7539,
                                    lng: 37.6208},
                             picture: "pictures/redsquare.jpg"},{
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
                             coor: {
                                 lat:39.9055,
                                 lng: 116.3976},
                             picture: "pictures/tiananmensquare.jpg"},{
                             coor: {
                                    lat: 39.9163,
                                    lng: 116.3972},
                             picture: "pictures/forbiddencity.jpg"},{
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
                             coor: {
                                 lat:35.0394,
                                 lng: 135.7292},
                             picture: "pictures/kinkakuji.jpg"},{
                             coor: {
                                    lat: 35.7148,
                                    lng: 139.7967},
                             picture: "pictures/sensoji.jpg"},{
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
                             coor: {
                                 lat:20.359444,
                                 lng: -89.771389},
                             picture: "pictures/uxmal.jpg"},{
                             coor: {
                                    lat: 20.49472,
                                    lng: -87.736111},
                             picture: "pictures/coba.jpg"},{
                             coor: {
                                    lat: 17.043889,
                                    lng: -96.767778},
                             picture: "pictures/montealban.jpg"}],
                         zoom: 6
                        },

            }



/*---------------------FUNCTIONS-------------------------------*/

/*---------------------Initializes a map-------------------------------------*/

 function initMap() {
        var marker =""
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 51.4968, lng: -115.9281}
        });

 }

/*-------------------------------Changes the map markers-------------------------------*/

function changeMap(center, locations, zoom) {
        var marker =""
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: zoom,
          center: center
        });

        var locations = locations;

        for (var i =0; i < locations.length; i++){
        marker = new google.maps.Marker({
          position: locations[i].coor,
          map: map
        });
      }
      }

/*------------------------------------Changes the images on the left side---------------------------*/

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

function showMe(whichdiv, whicharrow){
    var info = whichdiv;
    var pointer = whicharrow;
    if (info.style.display == "none") && (pointer.style.display == "none") {
        info.style.display = "block";
        pointer.style.display = "block";
    } else {
        info.style.display = "none";
        pointer.style.display = "none";
    }
}

document.getElementById('firstcountry').addEventListener("click", function(){
  showMe(document.getElementById("firstcountryinfo"), document.getElementById("arrowone"));
});

document.getElementById('secondcountry').addEventListener("click", function(){
  showMe(document.getElementById("secondcountryinfo"), document.getElementById("arrowtwo"));
})

document.getElementById('thirdcountry').addEventListener("click", function(){
  showMe(document.getElementById("thirdcountryinfo"), document.getElementById("arrowthree"));
})
