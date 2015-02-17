$(window).ready(function(){

  var jwo = {
    firstName: "Jesse",
    lastName: "Wolgamott",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  // alert(jwo.fullName());


  $.getJSON("/movies.json").then(function(data) {

    _.each(data.movies, function(movie){
      var diff = movie.ratings.audience_score - movie.ratings.critics_score;
      movie.ratings.differential = diff;
    })

    var sortedMovies = _.sortBy(data.movies, function(movie) { return movie.ratings.differential;})


    var source   = $("#movie-template").html();
    var template = Handlebars.compile(source);
    var preparedHtml = template( sortedMovies );

    $("#movies").html(preparedHtml);

  });

});
