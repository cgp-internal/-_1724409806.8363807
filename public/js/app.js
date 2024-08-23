let apiEndpoint = '/api/flightRequests';
let map;
let markers = [];

document.addEventListener("DOMContentLoaded", function () {
  map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
  }).addTo(map);

  const drawControl = new L.Control.Draw({
    draw: true,
    edit: false
  }).addTo(map);

  map.on('draw:created', function (e) {
    const polygon = e.layer;
    polygon.addTo(map);
    const coordinates = [];
    polygon.getLatLngs().forEach((latLng) => {
      coordinates.push([latLng.lat, latLng.lng]);
    });
    sendFlightRequest(coordinates);
  });

  map.on('click', function (e) {
    const coordinate = e.latlng;
    const marker = L.marker([coordinate.lat, coordinate.lng]).addTo(map);
    markers.push(marker);
  });

  const sendFlightRequest = function (polygonCoordinates) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiEndpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      polygon: polygonCoordinates
    }));

    xhr.onload = function () {
      if (xhr.status === 200) {
        const responses = JSON.parse(xhr.responseText);
        responses.forEach((response) => {
          const marker = L.marker([response.latitude, response.longitude]).addTo(map);
          markers.push(marker);
        });
      }
    };
  };
});