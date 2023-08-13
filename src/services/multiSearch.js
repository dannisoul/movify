import fetchMedia from './tmdb'
const searchURL = process.env.SEARCH_ENDPOINT
const prefixPosterURL = process.env.PREFIX_POSTER_URL
const prefixProfileURL = process.env.PREFIX_PROFILE_URL
const suffixLanguage = process.env.SUFFIX_LANGUAGE

export async function multiSearch ({ query }) {
  const response = await fetchMedia({
    url: searchURL + query + '&page=1' + '&' + suffixLanguage
  })

  const movies = response.results.filter(
    (x) => x.media_type === 'movie' && x.popularity > 2
  )
  const series = response.results.filter(
    (x) => x.media_type === 'tv' && x.popularity > 2
  )
  const people = response.results.filter((x) => x.media_type === 'person')

  const mappedMovies = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path
      ? prefixPosterURL + movie.poster_path
      : '/poster.jpg',
    score: parseInt(movie.vote_average * 10),
    date: movie.release_date,
    type: movie.media_type
  }))

  const mappedSeries = series.map((serie) => ({
    id: serie.id,
    title: serie.name,
    poster: serie.poster_path
      ? prefixPosterURL + serie.poster_path
      : '/poster.jpg',
    score: parseInt(serie.vote_average * 10),
    date: serie.first_air_date,
    type: serie.media_type
  }))

  const mappedPeople = people.map((person) => ({
    id: person.id,
    name: person.name,
    type: person.media_type,
    role: person.known_for_department,
    picture: person.profile_path
      ? prefixProfileURL + person.profile_path
      : '/default_picture.webp'
  }))

  return { movies: mappedMovies, series: mappedSeries, people: mappedPeople }
}
