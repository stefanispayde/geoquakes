// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
// c onsole.log(“Let’s get coding!“);
 // CODE IN HERE!

getQuake()
});

function getQuake() {
 $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    datatype: "json",
    success: onSuccess,
    error: onError
});

}

function onSuccess(json){
 //console.log(json);
 // TODO: forEach (earthquake)
 for (i = 0; i < json.features.length; i++){
   var title = json.features[i].properties.title;
   $("#info").append(`<p>${title}</p>`);

 }
}

function onError(a, b, c){
 console.log(a);
 console.log(b);
 console.log(c);
}
