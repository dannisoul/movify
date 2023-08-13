'use client'
import { usePagination } from '../../../hooks/usePagination'
import { usePopularSeries } from '../../../hooks/usePopularSeries'
import { MediaGrid } from '@/components/MediaGrid'

export default function PopularSeriesPage () {
  const { page, handleClick } = usePagination()
  const { series } = usePopularSeries({ page })
  return (

    <div className='w-[85%] mx-auto my-8'>
      <h2 className='text-xl font-semibold mb-8'>Top Series</h2>
      <MediaGrid
        mediaList={series}
      />
      <button
        className='w-full py-2 mt-8 bg-gradient-to-r from-[#2AB2AA] to-[#2577C3] text-white rounded-lg'
        onClick={handleClick}
      >Show more
      </button>
    </div>
  )
}
