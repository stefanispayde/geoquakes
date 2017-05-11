// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;

$(document).ready(function() {
  // c onsole.log(“Let’s get coding!“);
   // CODE IN HERE!
  initMap();
  getQuake();
  //map HERE ?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg

});

function initMap() {
  var austin = {lat: 30.2682, lng: -97.74295};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: austin
  });

  var marker = new google.maps.Marker({
    position: austin,
    map: map
  });
}

function getQuake() {
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    data: $("FeatureCollection").serialize(),
    datatype: "json",
    success: onSuccess,
    error: onError
  });
}


function onSuccess(json){
  console.log( json.features );
  console.log( json.features[0].geometry.coordinates[1] );
  // TODO: forEach (earthquake)
  for (var i = 0; i < json.features.length; i++){
    var quake = json.features[i];
    $("#info").append('<p>${quake.properties.place}</p>');

    var lat = json.features[i].geometry.coordinates[1];
    var lng = json.features[i].geometry.coordinates[0];
    //  var coordinates = {latitude: latitude, longitude: longitude};


    var marker = new google.maps.Marker({
     position:
     {
       lat: lat,
       lng: lng
      },
     map: map
    });
  }
}


function onError(xhr, status, errorThrown){
 console.log(errorThrown);
 console.log(status);
 console.dir(xhr);
}
