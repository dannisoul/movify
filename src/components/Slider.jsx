'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { MovieCard } from './MovieCard'
export function Slider ({ mediaList }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      number: 10,
      perView: 1,
      spacing: 10
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          number: 10,
          perView: 3,
          spacing: 10
        }
      },
      '(min-width: 768px)': {
        slides: {
          number: 10,
          perView: 4,
          spacing: 10
        }
      },
      '(min-width: 1000px)': {
        slides: {
          number: 10,
          perView: 5,
          spacing: 10
        }
      },
      '(min-width: 1200px)': {
        slides: {
          number: 10,
          perView: 6,
          spacing: 10
        }
      }
    }
  })
  return (
    <div ref={sliderRef} className='keen-slider my-8'>

      {mediaList.map(media => (
        <div className='keen-slider__slide' key={media.id}>
          <MovieCard
            id={media.id}
            title={media.title}
            poster={media.poster}
            date={media.date}
            score={media.score}
            type={media.type}
          />
        </div>
      ))}
    </div>
  )
}
