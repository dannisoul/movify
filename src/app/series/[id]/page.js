import { Cast } from '@/components/Cast'
import { Details } from '@/components/Details'
import { serieDetails } from '@/services/serieDetails'
export default async function Serie ({ params }) {
  const details = await serieDetails(params.id)
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
        color={details.color}
        trailer={details.trailer}
      />
      <Cast
        cast={details.cast}
      />
    </>
  )
}
