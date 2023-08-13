import fetchMedia from './tmdb'
const trendingSeriesURL = process.env.TRENDING_SERIES_ENDPOINT
const prefixPosterURL = process.env.PREFIX_POSTER_URL
const suffixLanguage = process.env.SUFFIX_LANGUAGE

export async function trendingSeries () {
  const series = await fetchMedia({ url: trendingSeriesURL + '?' + suffixLanguage })
  const tenMostPopular = series.results.slice(0, 10)
  return tenMostPopular.map(serie => ({
    id: serie.id,
    title: serie.name,
    poster: prefixPosterURL + serie.poster_path,
    score: parseInt(serie.vote_average * 10),
    date: serie.first_air_date,
    type: serie.media_type
  }))
}
