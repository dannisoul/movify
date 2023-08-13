'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header () {
  const [query, setQuery] = useState('')
  const router = useRouter()
  function handleChange (e) {
    const newQuery = e.target.value
    setQuery(newQuery)
  }
  function handleSubmit (e) {
    e.preventDefault()
    if (query === '') return
    router.push(`/results/${query}`)
    setQuery('')
  }
  return (
    <header className='bg-[#032541] flex justify-center lg:justify-between items-center p-4 flex-wrap gap-8'>
      <div className='flex items-center gap-12 flex-wrap justify-center'>
        <Link href='/'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-[#2AB2AA] to-[#2577C3] bg-clip-text text-transparent'>Movify</h1>
        </Link>
        <nav>
          <ul className='flex items-center text-white font-bold gap-8'>
            <li><Link href='/popular_movies'>Movies</Link></li>
            <li><Link href='/popular_series'>Series</Link></li>
            <li><Link href='/popular_people'>People</Link></li>
          </ul>
        </nav>
      </div>
      <form className='grow md:grow-0 basis-96' onSubmit={handleSubmit}>
        <div className='relative w-full'>
          <input className='pl-6 pr-20 py-2 w-full rounded-full outline-none' placeholder='Avengers, Star Wars, Harry Potter...' name='searchAll' onChange={handleChange} value={query} />
          <button className='absolute right-[-5px] bg-gradient-to-r from-[#2AB2AA] to-[#2577C3] p-2 rounded-full text-white'>Search</button>
        </div>
      </form>
    </header>
  )
}
