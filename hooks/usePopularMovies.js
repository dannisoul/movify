/* este hook tiene la funcion de devolver la lista de peliculas mas populares del momento */

import { useEffect, useState } from 'react'
export function usePopularMovies ({ page }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bestmovies', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page })
    })
      .then(response => response.json())
      .then(data => {
        setMovies((prevState) => {
          return [...prevState, ...data]
        })
      })
      .catch(error => console.log(error))
  }, [page])

  return { movies }
}
