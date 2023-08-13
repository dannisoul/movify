import { useState, useEffect } from 'react'

export function usePopularPeople ({ page }) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://movify-9w6t.onrender.com/bestpeople', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page })
    })
      .then(response => response.json())
      .then(data => {
        setPeople((prevState) => {
          return [...prevState, ...data]
        })
      })
      .catch(error => console.log(error))
  }, [page])

  return { people }
}
