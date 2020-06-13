// Store our API endpoint inside queryUrl
var url = "http://127.0.0.1:5000/data_json"

// Creating map object
var myMap = L.map("map", {
  center: [43.651070, -79.347015],
  zoom: 10
});

// Define outdoormap, satellitemap, and grayscalemap layers
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Grab the data with d3
d3.json(url, function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var latitude = response[i].Latitude;
    var longitude = response[i].Longitude;

    // Check for location property
    if (latitude && longitude) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup("<h3>" + response[i].Gender + "</h3><hr>" + "<h3>" + response[i].Age_Group + "</h3><hr>" + "<h3>" + response[i].Outcome + "</h3><hr>" + "<h3>" + response[i].Case_Date + "</h3><hr>"));
    }

  }
  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});


