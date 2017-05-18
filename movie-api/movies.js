
var movies = [
  {
    id: 1,
    title: 'TMNT',
    rating: 7
  },
  {
    id: 2,
    title: "Master & Commander: The Far Side Of The World",
    rating: 9
  }
]

exports.getMovies = function() {
  return movies;
}


exports.getMovieById = function(id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      return movies[i];
    }
  }
}

exports.addMovie = function(movie) {
  const newId = movies.length + 1;

  movie.id = newId;

  movies.push(movie);

  return newId;
}

exports.updateMovie = function(id, update) {
  // Find the movie that matches id
  const targetMovie = exports.getMovieById(id);

  // Merge the update object into that movie object.
  Object.assign(targetMovie, update);

  return targetMovie;
}


exports.destroyMovie = function(id) {
  let removedMovie = false;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies.splice(i--, 1);
      removedMovie = true;
    }
  }

  return removedMovie;
}
