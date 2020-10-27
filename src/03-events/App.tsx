/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const NUM_RESULTS_TIERS = [6, 12, 18, 24, 30]

interface SearchFormProps {
  // 👈🏾 3. define `onSubmit` function prop properly
  // it takes an object w/ `query` & `numResults` properties
}

// 👇🏾 3. add `SearchFormProps` to `SearchForm`
const SearchForm = () => {
  const [query, setQuery] = useState('')
  const [numResults, setNumResults] = useState(NUM_RESULTS_TIERS[1])

  // 👇🏾 4. on form submit, pass `query` & `numResults` to `onSubmit` prop
  // (don't forget to call `e.preventDefault()`)

  return (
    <form method="POST">
      <label>
        Query
        <input
          type="search"
          value={query}
          // 👈🏾 2. call `setQuery` with changed value
        />
      </label>

      <label>
        # of Results
        <select
          value={numResults}
          // 👈🏾 2. call `setNumResults` with changed value
        >
          {/* 👈🏾 1. map over `NUM_RESULTS_TIERS` to render `<option>` elements for each tier */}
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
      // 👈🏾 5. call `setFields` with submitted data, adding `lastSubmitted` property.
      // Use `lastSubmitted: Date.now()`
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
