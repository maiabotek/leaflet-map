
let map = L.map("map2").setView([21.310922, -74.596825], 5.49);

L.tileLayer('https://api.mapbox.com/styles/v1/maiabotek/clakudly8000015ngo9pxcmt6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFpYWJvdGVrIiwiYSI6ImNsYWt0cTN5NDBpcW0zb3BrNmt5NGhmZ3MifQ.Q8QeU6U3_UuTRwGRqcM8wA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i=0; 1 < places.length; i++) {
  L.marker([places[i].latitude,places[i].long ] ) .bindPopup('<h2>'+places[i].name+'</h2>'+'<p>'+places[i].descr+'</p>')
  .addTo(map);
}
