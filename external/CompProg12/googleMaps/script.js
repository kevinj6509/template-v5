// Victoria 48.4284° N, -123.3656° W

let myLat = 48.4284;
let myLong = -123.3656;
let myLocation;
let radius = 500;

let map;
let service;
let infoWindowPark; // for Park Info
let infoWindowCurrentLocation; // for your current location

let markers = []; // List of all markers on the map

try {
  myLocation = new google.maps.LatLng(myLat, myLong);
} catch {
  window.location.reload(true);
}

// when the window loads, initialize the map
window.onload = initializeMap();

// initialize map
function initializeMap() {
  // center map in Victoria by default
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    zoom: 13
  });

  searchForParks(myLocation);

  infoWindowCurrentLocation = new google.maps.InfoWindow();
  infoWindowPark = new google.maps.InfoWindow();

  // Create "Pan to Current Location" button
  // https://developers.google.com/maps/documentation/javascript/geolocation
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          myLocation = new google.maps.LatLng(pos.lat, pos.lng);
          const marker = new google.maps.Marker({
            position: pos,
            map: map
          });

          // infoWindowCurrentLocation.setPosition(pos);
          // infoWindowCurrentLocation.setContent("Location found.");
          // infoWindowCurrentLocation.open(map);
          map.setCenter(pos);

          searchForParks(pos);
        },
        () => {
          handleLocationError(true, infoWindowCurrentLocation, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindowCurrentLocation, map.getCenter());
    }
  });
} // initializeMap

// Error message if GeoLocation fails
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindowCurrentLocation.setPosition(pos);
  infoWindowCurrentLocation.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindowCurrentLocation.open(map);
}

function changeRadius() {
  radius = document.getElementById("radius").value;
  console.log(radius);
  searchForParks(myLocation);
} // changeRadius

// Search for parks within 5 km
// From https://developers.google.com/maps/documentation/javascript/examples/place-search
function searchForParks(location) {
  // use places API to search for all parks within 5 km
  let request = {
    location: location,
    radius: radius,
    query: "restaurant"
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, processParks);
} // searchForParks

// process search results for parks
function processParks(results, status) {
  var tempResults = [];

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    deleteMarkers();

    for (let i = 0; i < results.length; i++) {
      if (tempResults.length < 3) {
        tempResults.push(results[i]);
      } else {
        for (let j = 0; j < 3; j++) {
          if (results[i] > tempResults[j]) {
            tempResults[j] = results[i];
          } // if
        } // for
      } // else if
    } //for

    for (let g = 0; g < 3; g++) {
      console.log(tempResults[g]);
      createMarker(tempResults[g]);
    } // for
  } // if
} // processParks

// create a marker at place
// http://developers.google.com/maps/documentation/javascript/examples/place-search
function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const scaledIcon = {
    url:
      "https://cdn.glitch.com/0ca9faa6-710e-4241-ad22-aba0cc20638b%2Fmarker2.png?v=1620675877241",
    scaledSize: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  // https://developers.google.com/maps/documentation/javascript/markers
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    icon: scaledIcon,
    title: place.name
  });
  google.maps.event.addListener(marker, "click", () => {
    let contentString =
      "<h3>" +
      place.name +
      "</h3>" +
      "Rating: <b>" +
      place.rating +
      "</b> / 5 <p>" +
      place.formatted_address +
      "</p>";

    infoWindowPark.setContent(contentString || "");
    infoWindowPark.open(map, marker);
  });

  markers.push(marker);
} // Create Marker

// https://developers.google.com/maps/documentation/javascript/examples/marker-remove
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
