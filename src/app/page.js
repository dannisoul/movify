import { Slider } from '@/components/Slider'
import { trendingMovies } from '@/services/trendingMovies'
import { trendingSeries } from '@/services/trendingSeries'

export default async function Home () {
  const movies = await trendingMovies()
  const series = await trendingSeries()

  return (
    <main className='w-full'>
      <section className='mx-auto sm:w-[90%] w-[70%] my-8 max-w-[1200px]'>
        <h2 className='text-xl font-semibold'>Popular Movies</h2>
        <Slider mediaList={movies} />
        <h2 className='text-xl font-semibold'>Popular Series</h2>
        <Slider mediaList={series} />
      </section>
    </main>
  )
}
