import React, { Fragment, useState } from 'react'

type RatingFilter = '' | 'g' | 'pg' | 'pg-13' | 'r'
const RATING_FILTERS = [
  { value: '', label: 'All' },
  { value: 'g', label: 'G' },
  { value: 'pg', label: 'PG' },
  { value: 'pg-13', label: 'PG-13' },
  { value: 'r', label: 'R' },
] as { value: RatingFilter; label: string }[]

const NUM_RESULTS_TIERS = [6, 12, 18, 24, 30]

interface SearchFormProps {
  onSubmit: (fields: {
    query: string
    rating: RatingFilter
    numResults: number
  }) => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [query, setQuery] = useState('')
  const [rating, setRating] = useState(RATING_FILTERS[0].value)
  const [numResults, setNumResults] = useState(NUM_RESULTS_TIERS[1])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit({ query, rating, numResults })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Query
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <fieldset>
        <legend>Choose a rating</legend>
        {RATING_FILTERS.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              id={`rating-${value}`}
              checked={value === rating}
              onChange={() => setRating(value)}
            />
            <label htmlFor={`rating-${value}`}>{label}</label>
          </Fragment>
        ))}
      </fieldset>

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
    rating: RATING_FILTERS[0].value,
    numResults: NUM_RESULTS_TIERS[1],
    lastSubmitted: -1,
  })

  return (
    <main style={{ maxWidth: 500 }}>
      <SearchForm
        onSubmit={(fields) =>
          setFields({ ...fields, lastSubmitted: Date.now() })
        }
      />

      <hr />

      <dl>
        <dt>Query</dt>
        <dd>{fields.query}</dd>

        <dt>Rating</dt>
        <dd>
          {RATING_FILTERS.find(({ value }) => fields.rating === value)?.label}
        </dd>

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
