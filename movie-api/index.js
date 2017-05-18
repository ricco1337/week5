const express = require('express');
const movies = require('./movies');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/moviuecoe/:id', function(request, response, next) {
  let movie_id = request.params.id;

  let movie = movies.getMovieById(movie_id);

  response.status(200).json(movie);


})

app.post('/api/movie', function(request, response, next) {
  const newMovie = request.body;

  movies.addMovie(newMovie);

  response.status(200).send('ok');
})


app.put('/api/movie/:id', function(request, response, next) {
  const movie_id = request.params.id;
  const movie_update = request.body;

  movies.updateMovie(movie_id, movie_update);

  response.status(200).send('ok');
})

app.delete('/api/movie/:id', function(request, response, next) {
  const movie_id = request.params.id;

  movies.destroyMovie(movie_id);
  response.status(200).send('ok');
})

app.listen(8000, function() {
  console.log('Listening on 8000');
});
