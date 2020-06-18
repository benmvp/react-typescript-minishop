import React, { useState, useEffect } from 'react'
import { getResults, Result } from './api'

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([] as Result[])

  useEffect(() => {
    getResults(query).then(setResults)
  }, [query])

  return (
    <main>
      <label style={{ maxWidth: 400 }}>
        Giphy search
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <hr />

      {results.map(({ id, previewUrl }) => (
        <video key={id} src={previewUrl} loop autoPlay style={{ width: 300 }} />
      ))}
    </main>
  )
}

export default App
