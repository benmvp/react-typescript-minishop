import { useState, useEffect } from 'react'
import { getResults, Result } from './api'

const useGiphy = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState([] as Result[])

  useEffect(() => {
    getResults(query).then(setResults)
  }, [query])

  return [results, query, setQuery] as const
}

export default useGiphy
