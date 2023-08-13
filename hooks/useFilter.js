import { useState, useEffect } from 'react'

export function useFilter ({ results }) {
  const categories = [
    { length: results.movies.length, type: 'movies' },
    { length: results.series.length, type: 'series' },
    { length: results.people.length, type: 'people' }
  ]

  const [category, setCategory] = useState('')

  useEffect(() => {
    categories.sort((a, b) => b.length - a.length)
    const newCategory = categories[0].type
    setCategory(newCategory)
  }, [])

  function handleChange (e) {
    const newCategory = e.target.value
    setCategory(newCategory)
  }

  const mediaList = (category === 'movies')
    ? results.movies
    : (category === 'series')
        ? results.series
        : []

  return { category, handleChange, mediaList }
}
