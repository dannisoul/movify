import fetchMedia from './tmdb'
const movieURL = process.env.MOVIE_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE
const prefixPosterURL = process.env.PREFIX_POSTER_URL

export async function popularMovies (page) {
  const movies = await fetchMedia({ url: movieURL + '/popular' + '?' + suffixLanguage + `&page=${page}` })
  console.log(movies)
  const mappedMovies = movies.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    poster: prefixPosterURL + movie.poster_path,
    score: parseInt(movie.vote_average * 10),
    date: movie.release_date,
    type: 'movie'
  }))

  return mappedMovies
}
