import React, { useState } from 'react'

const NUM_RESULTS_TIERS = [6, 12, 18, 24, 30]

interface SearchFormProps {
  // 👈🏾 define `onSubmit` function prop properly
}

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const [numResults, setNumResults] = useState(NUM_RESULTS_TIERS[1])

  // 👇🏾 on form submit, pass `query` & `numResults` to `onSubmit` prop

  return (
    <form>
      <label>
        Query
        <input
          type="search"
          value={query}
          // 👈🏾 call setQuery with changed value
        />
      </label>

      <label>
        # of Results
        <select
          value={numResults}
          // 👈🏾 call setNumResults with changed value
        >
          {/* 👈🏾 map over `NUM_RESULTS_TIERS` to render `<option>` elements for each tier */}
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
      // 👈🏾 call `setFields` with submitted data, adding `lastSubmitted` property.
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
