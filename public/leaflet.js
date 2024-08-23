// Leaflet.js library for interactive mapping.

// Check if Leaflet is already loaded
if (typeof L === 'undefined') {
  // Load Leaflet CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
  document.getElementsByTagName('head')[0].appendChild(link);

  // Load Leaflet JavaScript
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Initialize Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Add a marker to the map
L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('You are here!')
  .openPopup();

// Function to get user location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      map.setView([lat, lon], 13);
      L.marker([lat, lon]).addTo(map)
        .bindPopup('Your location!')
        .openPopup();
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

// Add a button to get user location
var button = document.createElement('button');
button.innerHTML = 'Get My Location';
button.onclick = getUserLocation;
document.body.appendChild(button);