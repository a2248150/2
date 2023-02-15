// Victoria
let myLat = 48.4284;
let myLong = -123.3656;
let myLocation = new google.maps.LatLng(myLat, myLong);

let map;
let service;
let infoWindowPark; // for park info
let infoWindowCurrentLocation; // for your location

let markers = [];

// when the window loads, intialize the map
window.onload = initializeMap;

// intialize map
function initializeMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    zoom: 13
  });
  
} // initializeMap

// Search for parks within 5 km
// From https://developers.google.com/maps/documentation/javascript/examples/place-search#maps_place_search-javascript

function searchForPark(location) {
  
  // use places API to search for all parks within 5 km
  let request = {
    location: location,
    radius: "500",
    query: "park"
  };
  
  service = new google.maps.places.PlacesService(map);
  service.text
  
}