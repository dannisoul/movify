/* eslint-disable react/jsx-closing-tag-location */
'use client'

import { ScoreMeter } from './ScoreMeter'
import { Play } from '@/icons/Media'
import { Trailer } from './Trailer'
import { useState } from 'react'

export function Details ({ title, genres, score, overview, poster, backdrop, year, trailer, color }) {
  const [trailerVisibility, setTrailerVisibility] = useState(false)
  const backdropClass = {
    background: `url(${backdrop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top'
  }
  const coverClass = {
    backgroundColor: `rgba(${color[0]},${color[1]}, ${color[2]}, .75)`
  }

  function handleClick () {
    setTrailerVisibility(!trailerVisibility)
  }
  return (
    <>
      <article style={backdropClass} className='my-8'>
        <div className='w-full h-full flex items-center justify-center' style={coverClass}>
          <div className=' container flex items-center justify-center max-w-[1200px] gap-8 text-white p-6 lg:flex-nowrap flex-wrap'>
            <img className='rounded-lg w-[250px] h-auto' src={poster} alt={`Poster for ${title} movie`} />
            <div className=''>
              <h2 className='text-2xl font-bold drop-shadow-lg'>{title} <span className='font-normal drop-shadow-lg'>({year})</span></h2>
              <span className='text-sm drop-shadow-sm'>{genres}</span>
              <div className='my-4 flex items-center'>
                <div className='w-14 h-14'>
                  <ScoreMeter score={score} />
                </div>
                <p className='max-w-[70px] text-center font-bold text-sm'>User Score</p>
                {
                  (trailer !== 'N/A')
                    ? <button className='flex items-center gap-2 ml-4' onClick={handleClick}>
                      Play Trailer
                      <Play />
                    </button>
                    : <button className='flex items-center gap-2 ml-4'>
                      Trailer Not Available
                    </button>
                }
              </div>
              <section>
                <h3 className='drop-shadow-lg font-bold'>Overview</h3>
                <p className='drop-shadow-lg'>{overview}</p>
              </section>
            </div>
          </div>
        </div>
      </article>
      {
        trailerVisibility &&
          <Trailer
            url={trailer}
            handleClick={handleClick}
          />
      }
    </>
  )
}
