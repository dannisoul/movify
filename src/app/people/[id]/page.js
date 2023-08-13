import { getPersonCredits } from '@/services/personCredits'
import { PersonInfo } from '@/components/PersonInfo'
export default async function Person ({ params }) {
  const { details, credits } = await getPersonCredits({ id: params.id })
  return (
    <PersonInfo
      details={details}
      credits={credits}
    />
  )
}
