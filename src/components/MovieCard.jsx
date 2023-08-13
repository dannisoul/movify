import Link from 'next/link'
import { ScoreMeter } from './ScoreMeter'
import Image from 'next/image'

export function MovieCard ({ id, title, poster, score, date, type }) {
  const path = (type === 'tv') ? `/series/${id}` : `/movies/${id}`
  return (
    <article className='p-4 border border-slate-300 rounded-lg'>
      <div className='relative w-fit mx-auto'>
        <Image
          src={poster}
          width={300}
          height={300}
          alt={`poster for ${title}`}
          className='rounded-lg aspect-[2/3] object-cover'
        />
        <div className='w-12 h-12 absolute bottom-[-20px] left-2'>
          <ScoreMeter score={score} />
        </div>
      </div>
      <div className='mt-8 mb-4 text-center text-[12px] '>
        <Link href={path} className='font-bold w-full overflow-hidden text-ellipsis line-clamp-1 hover:text-[deepskyblue] transition-all text-[14px]'>
          {title}
        </Link>
        <span>{date}</span>
      </div>
    </article>
  )
}
