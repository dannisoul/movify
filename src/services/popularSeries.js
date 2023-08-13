import fetchMedia from './tmdb'
const serieURL = process.env.SERIE_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE
const prefixPosterURL = process.env.PREFIX_POSTER_URL

export async function popularSeries (page) {
  const series = await fetchMedia({
    url: serieURL + '/popular' + '?' + suffixLanguage + `&page=${page}`
  })
  const mappedSeries = series.results.map((serie) => ({
    id: serie.id,
    title: serie.name,
    poster: prefixPosterURL + serie.poster_path,
    score: parseInt(serie.vote_average * 10),
    date: serie.first_air_date,
    type: 'tv'
  }))

  return mappedSeries
}
