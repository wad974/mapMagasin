var map = L.map('map', {
    center: [-21.1402, 55.5242],
    zoom: 10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/***VIDEO */
video = ' <video autoplay="true" controls width="300px" src="video/Alicia Keys - No One (Official Music Video).mp4" type="video/mp4"></video> '

/**LE PORT */
var marker = L.marker([-20.95378,55.30962]).addTo(map);
marker.bindPopup(video).openPopup();

/***ST DENIS */
var marker = L.marker([-20.89800,55.49757]).addTo(map);
marker.bindPopup(video).openPopup();

/**ST PAUL */
var marker = L.marker([-20.98359,55.29421]).addTo(map);
marker.bindPopup(video).openPopup();

/**ST LOUIS */
var marker = L.marker([-21.29288,55.40675]).addTo(map);
marker.bindPopup(video).openPopup();

/***ST JO */
var marker = L.marker([-21.37989,55.60818]).addTo(map);
marker.bindPopup(video).openPopup();

/***ST CLO */
var marker = L.marker([-20.89836,55.47540]).addTo(map);
marker.bindPopup(video).openPopup();

/***ST ANDRE */
var marker = L.marker([-20.96457,55.65832]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

/***TAMPON 14EM */
var marker = L.marker([-21.25226,55.52085]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

/***ST PIERRE MAGASIN VERT*/
var marker = L.marker([-21.29108,55.51279]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

/***ST PIERRE ANNEXE*/
var marker = L.marker([-21.29073,55.51262]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

/***TAMPON 600 */
var marker = L.marker([-21.28009,55.51175]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();



function onMapClick(e) {
    alert("Cliquez sur l'un des marqueurs pour lancer la video");
}

map.on('click', onMapClick);

