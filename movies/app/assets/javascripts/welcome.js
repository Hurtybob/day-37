$(window).ready(function(){

  $.getJSON("/movies.json").then(function(data) {

    console.log(data);

  });

});
