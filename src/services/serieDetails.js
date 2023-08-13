import fetchMedia from './tmdb'
import { getColor } from 'colorthief'

const prefixPosterURL = process.env.PREFIX_POSTER_URL
const prefixBackdropURL = process.env.PREFIX_BACKDROP_URL
const prefixProfileURL = process.env.PREFIX_PROFILE_URL
const serieURL = process.env.SERIE_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE

export async function serieDetails (id) {
  const details = fetchMedia({ url: serieURL + id + '?' + suffixLanguage })
  const credits = fetchMedia({ url: serieURL + id + '/credits?' + suffixLanguage })
  const trailer = fetchMedia({ url: serieURL + id + '/videos?' + suffixLanguage }) // gets movie trailer

  const promises = await Promise.all([details, credits, trailer])
  const data = []

  // mapping to extract only needed data
  data.push(promises[0])
  const response = data.map(serie => ({
    id: serie.id,
    title: serie.name,
    poster: prefixPosterURL + serie.poster_path,
    backdrop: prefixBackdropURL + serie.backdrop_path,
    score: parseInt(serie.vote_average * 10),
    date: serie.first_air_date,
    year: serie.first_air_date.split('-')[0],
    overview: serie.overview,
    genres: serie.genres.map(genre => genre.name).join(' ')
  }))[0]

  // adding cast to repsonse
  const cast = promises[1].cast
  const mainCast = cast.slice(0, 10)
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
