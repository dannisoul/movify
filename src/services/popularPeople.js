import fetchMedia from './tmdb'
const personURL = process.env.PERSON_ENDPOINT
const suffixLanguage = process.env.SUFFIX_LANGUAGE
const prefixProfileURL = process.env.PREFIX_PROFILE_URL

export async function popularPeople (page) {
  const people = await fetchMedia({ url: personURL + '/popular' + '?' + suffixLanguage + `&page=${page}` })

  const mappedPeople = people.results.map(person => ({
    id: person.id,
    role: person.known_for_department,
    name: person.name,
    picture: (person.profile_path)
      ? prefixProfileURL + person.profile_path
      : '/default_picture.webp'
  }))

  return mappedPeople
}
