import fetchMedia from './tmdb'
import { getColor } from 'colorthief'

const prefixPosterURL = process.env.PREFIX_POSTER_URL
const prefixBackdropURL = process.env.PREFIX_BACKDROP_URL
const prefixProfileURL = process.env.PREFIX_PROFILE_URL
const movieURL = process.env.MOVIE_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE

export async function movieDetails (id) {
  const details = fetchMedia({ url: movieURL + id + '?' + suffixLanguage }) // gets movie details
  const credits = fetchMedia({ url: movieURL + id + '/credits?' + suffixLanguage }) // gets movie cast
  const trailer = fetchMedia({ url: movieURL + id + '/videos?' + suffixLanguage }) // gets movie trailer

  const promises = await Promise.all([details, credits, trailer])
  const data = []
  data.push(promises[0])

  // mapping to extract only needed data
  const response = data.map(movie => ({
    id: movie.id,
    title: movie.title,
    poster: prefixPosterURL + movie.poster_path,
    backdrop: prefixBackdropURL + movie.backdrop_path,
    score: parseInt(movie.vote_average * 10),
    year: movie.release_date.split('-')[0],
    overview: movie.overview,
    genres: movie.genres.map(genre => genre.name).join(' ')
  }))[0]

  // adding cast to repsonse
  const cast = promises[1].cast
  const mainCast = cast.slice(0, 16)
  response.cast = mainCast.map(person => ({
    id: person.id,
    name: person.name,
    character: person.character,
    picture: (person.profile_path)
      ? prefixProfileURL + person.profile_path
      : '/default_picture.webp'
  }))

  // adding trailer url to response
  const video = promises[2].results.filter(video => video.type === 'Trailer')
  response.trailer = (video.length > 0) ? video[0].key : 'N/A'

  // adding main color poster (for styling component)
  const color = await getColor(response.poster, 500)
  response.color = color
  return response
}
