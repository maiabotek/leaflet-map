
let map = L.map("map1").setView([18.116298, -77.315504], 8.13);

L.tileLayer('https://api.mapbox.com/styles/v1/maiabotek/clakudly8000015ngo9pxcmt6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFpYWJvdGVrIiwiYSI6ImNsYWt0cTN5NDBpcW0zb3BrNmt5NGhmZ3MifQ.Q8QeU6U3_UuTRwGRqcM8wA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([18.019462, -76.779625]).addTo(map);
let marker2 = L.marker([18.416877, -77.134056]).addTo(map);
let marker3 = L.marker([17.884444, -76.901173]).addTo(map);
let marker4 = L.marker([17.935144,-76.779500]).addTo(map);

marker1.bindPopup("<b>The Bob Marley Museum</b><br>The former home of the late reggae singer.");
marker2.bindPopup("<b>Dunn's River Falls</b><br>A popular waterfall and tourist attraction.");
marker3.bindPopup("<b>Hellshire Beach</b><br>A white sand beach on the South coast.");
marker4.bindPopup("<b>Norman Manley International Airport</b><br>Where most international travelers to the island arrive.");
