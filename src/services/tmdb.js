const apiToken = process.env.API_TOKEN_ACCESS

export default async function fetchMedia ({ url }) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`
      },
      next: {
        revalidate: 86400
      }
    })
    if (!response.ok) throw new Error(response.statusText)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
