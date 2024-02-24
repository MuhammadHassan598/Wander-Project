// Initialize the Leaflet map
let map = L.map('map').setView([coordinates[1], coordinates[0]], 13);

// Add a tile layer for satellite streets from OpenStreetMap's HOT imagery with English labels
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en', {
    attribution: '© Esri',


    maxZoom: 14,
    id: 'osm-satellite-streets'
}).addTo(map);

// Define a red icon for the marker
const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

console.log(coordinates);

// Add a marker to the map with the red icon
L.marker([coordinates[1], coordinates[0]], { icon: redIcon }).addTo(map)
    .bindPopup('Hello, Exact location will be provided after booking!')
    .openPopup();
