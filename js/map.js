let map = L.map('homeMap').setView([51.20139749306335, 4.433206998336677], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	doubleClickZoom: false,
	scrollWheelZoom: false

}).addTo(map);

let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]]
L.rectangle(bounds, { color: "#bb60c5", weight: 1 }).addTo(map);

var circle = L.circle([51.20139749306335, 4.433206998336677], {
	color: '#bb60c5',
	fillColor: '#bb60c5',
	fillOpacity: 0.15,
	radius: 3500
}).addTo(map);

let homeMarker = L.marker([51.20139749306335, 4.433206998336677], {
	alt: "Home area",
}).addTo(map).bindPopup("Home");

let apMarker = L.marker([51.23009, 4.41616], {
	alt: "AP Hogeschool",
}).addTo(map).bindPopup("AP Hogeschool").openPopup();
