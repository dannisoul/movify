import Link from 'next/link'
import { Facebook, Github, Twitter } from '@/icons/Social'

export function Footer () {
  return (
    <footer className='bg-[#032541] text-white flex flex-col items-center gap-2 py-6'>
      <Link href='/' className='bg-gradient-to-r from-[#2AB2AA] to-[#2577C3] text-3xl font-bold bg-clip-text text-transparent'>Movify</Link>
      <div className='mt-2'>
        <p>Site created by Daniel Vargas Tapia</p>
        <p className='text-sm text-center'>2023</p>
      </div>
      <ul className='flex gap-6 mt-2'>
        <li><Link href='https://github.com/dannisoul'><Github /></Link></li>
        <li><Link href='https://www.facebook.com/'><Facebook /></Link></li>
        <li><Link href='https://twitter.com/danni_soul'><Twitter /></Link></li>
      </ul>
    </footer>
  )
}
