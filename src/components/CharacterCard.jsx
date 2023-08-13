import Image from 'next/image'
import Link from 'next/link'

export function CharacterCard ({ id, picture, name, character, role }) {
  return (
    <article className='flex flex-col items-center justify-start border max-w-[140px] rounded-lg overflow-hidden shadow-lg'>
      <Image src={picture} alt='' width={300} height={300} className='w-90% h-auto object-cover' />
      <Link href={`/people/${id}`} className='hover:text-[deepskyblue]'>
        <div className='p-2 flex flex-col items-center justify-center'>
          <span className='font-bold text-[10px] text-center mt-2'>{name}</span>
          <span className='text-[10px] text-center h-[36px] flex justify-center'>{role ?? character}</span>
        </div>
      </Link>
    </article>
  )
}
