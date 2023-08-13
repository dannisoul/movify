import Image from 'next/image'
import Link from 'next/link'

export function MinMovieCard ({ poster, title, id, type }) {
  const path = (type === 'tv') ? `/series/${id}` : `/movies/${id}`
  return (
    <article className='max-w-[150px]'>
      <Image
        src={poster}
        width={150}
        height={150}
        className='w-full h-auto aspect-[2/3] rounded-lg'
      />
      <Link href={path} className='text-center block text-sm m-1'>{title}</Link>
    </article>
  )
}
