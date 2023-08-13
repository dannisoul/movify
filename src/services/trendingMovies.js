import fetchMedia from './tmdb'
const trendingMoviesURL = process.env.TRENDING_MOVIES_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE
const prefixPosterURL = process.env.PREFIX_POSTER_URL

export async function trendingMovies () {
  const movies = await fetchMedia({ url: trendingMoviesURL + '?' + suffixLanguage })
  const tenMostPopular = movies.results.slice(0, 10)
  return tenMostPopular.map(movie => ({
    id: movie.id,
    title: movie.title,
    poster: prefixPosterURL + movie.poster_path,
    score: parseInt(movie.vote_average * 10),
    date: movie.release_date,
    type: movie.media_type
  }))
}
