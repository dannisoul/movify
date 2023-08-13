'use client'

import { useFilter } from '../../hooks/useFilter'
import { MediaGrid } from './MediaGrid'
import { PeopleGrid } from './PeopleGrid'

export function FilterType ({ results }) {
  const { category, handleChange, mediaList } = useFilter({ results })

  return (
    <section className='flex w-[90%] mx-auto my-8 gap-[1rem] flex-wrap sm:flex-nowrap'>
      <aside className='w-[250px] rounded-lg overflow-hidden border border-slate-400/50 self-start shrink-0 grow sm:grow-0'>
        <header className='p-4 bg-gradient-to-l from-[#2AB2AA] to-[#2577C3] text-center text-white font-bold'>
          <h2>Search Results</h2>
        </header>
        <ul className='flex flex-col'>
          <li className='relative'>
            <input
              className='peer'
              type='radio'
              name='media_type'
              id='moviesFilterID'
              hidden
              value='movies'
              checked={(category === 'movies')}
              onChange={handleChange}
            />
            <label className='p-4 block peer-checked:bg-[#d9d9d9] cursor-pointer' htmlFor='moviesFilterID'>Movies</label>
            <span className='absolute right-4 top-[50%] translate-y-[-50%] py-2 px-4 text-[12px] rounded-lg font-bold bg-[#d9d9d9] peer-checked:bg-white'>
              {results.movies.length}
            </span>
          </li>
          <li className='relative'>
            <input
              className='peer'
              type='radio'
              name='media_type'
              id='seriesFilterID'
              hidden
              value='series'
              checked={(category === 'series')}
              onChange={handleChange}
            />
            <label className='p-4 block peer-checked:bg-[#d9d9d9] cursor-pointer' htmlFor='seriesFilterID'>Series</label>
            <span className='absolute right-4 top-[50%] translate-y-[-50%] py-2 px-4 text-[12px] rounded-lg font-bold bg-[#d9d9d9] peer-checked:bg-white'>
              {results.series.length}
            </span>
          </li>
          <li className='relative'>
            <input
              className='peer'
              type='radio'
              name='media_type'
              id='peopleFilterID'
              hidden
              value='people'
              checked={(category === 'people')}
              onChange={handleChange}
            />
            <label className='p-4 block peer-checked:bg-[#d9d9d9] cursor-pointer' htmlFor='peopleFilterID'>People</label>
            <span className='absolute right-4 top-[50%] translate-y-[-50%] py-2 px-4 text-[12px] rounded-lg font-bold bg-[#d9d9d9] peer-checked:bg-white'>
              {results.people.length}
            </span>
          </li>
        </ul>
      </aside>
      {
        (category === 'people')
          ? (results.people.length > 0)
              ? <PeopleGrid
                  people={results.people}
                />
              : <p className='w-full text-center self-center'>There are no people that match your query</p>
          : (mediaList.length > 0)
              ? <MediaGrid
                  mediaList={mediaList}
                />
              : (category === 'movies')
                  ? <p className='w-full text-center self-center'>There are no movies that match your query</p>
                  : <p className='w-full text-center self-center'>There are no series that match your query</p>

      }
    </section>
  )
}
