import React, { useState } from 'react'

const NUM_RESULTS_TIERS = [6, 12, 18, 24, 30]

interface SearchFormProps {
  onSubmit: (fields: { query: string; numResults: number }) => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('')
  const [numResults, setNumResults] = useState(NUM_RESULTS_TIERS[1])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit({ query, numResults })
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>
        Query
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <label>
        # of Results
        <select
          value={numResults}
          onChange={(e) => setNumResults(parseInt(e.target.value))}
        >
          {NUM_RESULTS_TIERS.map((tier) => (
            <option key={tier} value={tier}>
              {tier}
            </option>
          ))}
        </select>
      </label>

      <div className="button-group">
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  )
}

const App = () => {
  const [fields, setFields] = useState({
    query: '',
    numResults: NUM_RESULTS_TIERS[1],
    lastSubmitted: -1,
  })

  return (
    <main style={{ maxWidth: 500 }}>
      <SearchForm
        onSubmit={(newFields) =>
          setFields({ ...newFields, lastSubmitted: Date.now() })
        }
      />

      <hr />

      <dl>
        <dt>Query</dt>
        <dd>{fields.query}</dd>

        <dt>Num Results</dt>
        <dd>{fields.numResults}</dd>

        <dt>Last Submitted</dt>
        <dd>
          {fields.lastSubmitted > 0
            ? new Date(fields.lastSubmitted).toLocaleTimeString()
            : 'Not yet'}
        </dd>
      </dl>
    </main>
  )
}

export default App
