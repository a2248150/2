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

function initializeMap() {
  
  
  
} // initializeMap