mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcmxleWthYmlyIiwiYSI6ImNqaTF2Y3ZncDFoemUzcW51dXdvYjcyZHUifQ.Nxod4xaAg4vDcHML37whwg';


var monument = [-77.0353, 38.8895];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shirleykabir/cjllpt32j45kp2rmr2knvpgus',
    center: [-98.5795, 39.8283],
    zoom: 4
});


var locations = {};

// map.on('click', function (e) {
//     map.flyTo({
//         center: [-98.5795, 39.8283],
//         zoom: 4,
//         speed: 5,
//         curve: 1,
//         easing(t) {
//           return t;
//         }
//       });
// });

// map.on('click', function(e) {
//     // alert(e.latlng);
//     map.flyTo({
//         center: [-98.5795, 39.8283],
//         zoom: 4,
//         speed: 5,
//         curve: 1,
//         easing(t) {
//           return t;
//         }
//       });
// });

// document.getElementById("map").onclick = function() {
//     map.flyTo({
//         center: [-98.5795, 39.8283],
//         zoom: 4,
//         speed: 5,
//         curve: 1,
//         easing(t) {
//           return t;
//         }
//       });

//     return;
// };

d3.csv("./data/alumni.csv", function (data) {
    data.forEach(function (alum) {
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
        .setText(alum["first-name"] + " " + alum["last-name"] + " • " + alum.current + " • previously " + alum.position);

        // create DOM element for the marker
        var el = document.createElement('div');
        el.className = "alum-marker";
        el.style.backgroundImage = "url('" + alum["img-src"] + "')";

        el.style.cursor = 'pointer';
        el.onclick = function() {
            map.flyTo({
                center: [alum.lng, alum.lat],
                zoom: 12,
                speed: 5,
                curve: 1,
                easing(t) {
                  return t;
                }
              });
              return;
        };

        console.log(el.onclick);

        // create the marker
        new mapboxgl.Marker(el)
        .setLngLat([alum.lng, alum.lat])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

    });
});