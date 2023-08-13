import fetchMedia from './tmdb'
const urlPerson = process.env.PERSON_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE
const prefixPosterURL = process.env.PREFIX_POSTER_URL
const prefixProfileURL = process.env.PREFIX_PROFILE_URL_HD

export async function getPersonCredits ({ id }) {
  const combinedCredits = fetchMedia({
    url: urlPerson + id + '/combined_credits' + '?' + suffixLanguage
  })
  const personalDetails = fetchMedia({
    url: urlPerson + id + '?' + suffixLanguage
  })

  const promises = await Promise.all([
    combinedCredits,
    personalDetails
  ])

  const credits = promises[0].cast
  const details = promises[1]

  credits.sort(
    (a, b) => b.popularity - a.popularity && b.vote_count - a.vote_count
  )

  const mostPopular = credits.slice(0, 6)

  const mappedCredits = mostPopular.map((x) => ({
    id: x.id,
    poster: x.poster_path ? prefixPosterURL + x.poster_path : '/poster.jpg',
    title: x.title ?? x.name,
    type: x.media_type
  }))

  const mappedDetails = [details].map(x => ({
    id: x.id,
    name: x.name,
    biography: x.biography,
    picture: (x.profile_path)
      ? prefixProfileURL + x.profile_path
      : '/default_picture.webp'
  }))

  return { credits: mappedCredits, details: mappedDetails[0] }
}
