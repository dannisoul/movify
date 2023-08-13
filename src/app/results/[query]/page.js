import { multiSearch } from '@/services/multiSearch'
import { FilterType } from '@/components/FilterType'
export default async function Results ({ params }) {
  const query = params.query
  const results = await multiSearch({ query })
  return (
    <div>
      <FilterType
        results={results}
      />
    </div>
  )
}
