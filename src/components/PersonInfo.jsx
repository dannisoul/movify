import Image from 'next/image'
import { MinMovieCard } from './MinMovieCard'

export function PersonInfo ({ credits, details }) {
  return (
    <article className='flex w-[85%] mx-auto my-8 gap-8 flex-wrap sm:flex-nowrap'>
      <Image
        src={details.picture}
        width={300}
        height={300}
        alt=''
        className='rounded-lg mx-auto'
        style={{ width: '200px', height: 'auto', alignSelf: 'start' }}
      />
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>{details.name}</h2>
        <h3 className='text-xl font-bold'>Biography</h3>
        <p className='text-[14px]'>{details.biography}</p>
        <h3 className='text-xl font-bold'>Known for</h3>
        <div className='flex gap-2 flex-wrap w-full justify-center'>
          {credits.map(x => (
            <MinMovieCard
              poster={x.poster}
              title={x.title}
              id={x.id}
              type={x.type}
              key={x.id}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
