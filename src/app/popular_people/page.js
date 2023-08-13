'use client'
import { PeopleGrid } from '@/components/PeopleGrid'
import { usePagination } from '../../../hooks/usePagination'
import { usePopularPeople } from '../../../hooks/usePopularPeople'

export default function PopularPeoplePage () {
  const { page, handleClick } = usePagination()
  const { people } = usePopularPeople({ page })
  return (
    <div className='w-[85%] mx-auto my-8'>
      <h2 className='text-xl font-semibold mb-8'>Top People</h2>
      <PeopleGrid
        people={people}
      />
      <button
        className='w-full py-2 mt-8 bg-gradient-to-r from-[#2AB2AA] to-[#2577C3] text-white rounded-lg'
        onClick={handleClick}
      >Show more
      </button>
    </div>
  )
}
