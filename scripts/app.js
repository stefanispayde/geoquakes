// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  // console.log("Let's get coding!");
  // CODE IN HERE!
function getQuakes() {
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    data: "json",
    success: onSuccess,
    error: onError
  });
}

function onSuccess(json) {
  console.log(json);
  for (var i=0; i < json.features.length; i++) {
	$("info").append("<p>"+json.features[i].properties.title+"</p>");
  console.log(json.features[i].properties.title);
}
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}




 getQuakes();
});
