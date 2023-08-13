'use client'

export function Trailer ({ url, handleClick }) {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex items-center justify-center' onClick={handleClick}>
      <iframe clas width='560' height='315' src={`https://www.youtube.com/embed/${url}`} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
    </div>
  )
}
