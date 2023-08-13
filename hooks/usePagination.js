import { useState } from 'react'
export function usePagination () {
  const [page, setPage] = useState(1)

  function handleClick () {
    setPage(page + 1)
  }

  return { page, handleClick }
}
