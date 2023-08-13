import { Details } from '@/components/Details'
import { movieDetails } from '@/services/movieDetails'
import { Cast } from '@/components/Cast'
export default async function Movie ({ params }) {
  const details = await movieDetails(params.id)
  return (
    <>
      <Details
        backdrop={details.backdrop}
        genres={details.genres}
        id={details.id}
        overview={details.overview}
        poster={details.poster}
        score={details.score}
        title={details.title}
        year={details.year}
        trailer={details.trailer}
        color={details.color}
      />
      <Cast
        cast={details.cast}
      />
    </>
  )
}
