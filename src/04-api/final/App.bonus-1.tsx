import React from 'react'
import useGiphy from './useGiphy'

const App = () => {
  const [results, query, setQuery] = useGiphy()

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
