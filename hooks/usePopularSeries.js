/* este hook tiene la funcion de devolver la lista de peliculas mas populares del momento */

import { useEffect, useState } from 'react'
export function usePopularSeries ({ page }) {
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch('https://movify-9w6t.onrender.com/bestseries', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page })
    })
      .then(response => response.json())
      .then(data => {
        setSeries((prevState) => {
          return [...prevState, ...data]
        })
      })
      .catch(error => console.log(error))
  }, [page])

  return { series }
}
