$(window).ready(function(){

  window.map = L.map('map').setView([29.96, -95.38], 8);

  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'jwo-cink.l87oc4c2'
  }).addTo(window.map);

  var marker = L.marker([29.76, -95.38]).addTo(window.map).bindPopup("Welcome to Houston");

});
