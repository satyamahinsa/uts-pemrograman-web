var map = L.map('map').setView([-2.548926, 118.014863], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var stations = [
    { name: 'Jakarta Central Station', location: [-6.21462, 106.84513] },
    { name: 'Surabaya Electric Hub', location: [-7.25747, 112.75209] },
    { name: 'Bandung Eco Station', location: [-6.91474, 107.60981] },
    { name: 'Medan Green Port', location: [3.59519, 98.67222] },
    { name: 'Semarang Renewable Hub', location: [-6.9932, 110.4203] },
    { name: 'Yogyakarta Heritage Station', location: [-7.80119, 110.3645] },
    { name: 'Makassar Sustainable Center', location: [-5.15213, 119.4556] },
    { name: 'Denpasar Eco Station', location: [-8.6705, 115.2126] }
];

stations.forEach(function(station) {
    L.marker(station.location).addTo(map)
        .bindPopup(station.name);
});