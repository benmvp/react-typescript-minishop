import React from 'react'
import PropTypes from 'prop-types'
import { ITEMS } from './data'

const ResultsItem = ({ id, title, url, rating, previewUrl }) => {
  return (
    <section
      key={id}
      className="card"
      style={{
        width: '300px',
        display: 'inline-block',
        marginRight: '16px',
      }}
    >
      <video src={previewUrl} alt={title} loop autoPlay />
      <section className="card-section">
        <h5>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          {rating && ` (${rating})`}
        </h5>
      </section>
    </section>
  )
}

// 👇🏾 convert to a TypeScript interface props definition
ResultsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.oneOf(['G', 'PG', 'PG-13', 'R']),
  previewUrl: PropTypes.string.isRequired,
}
ResultsItem.defaultProps = {
  rating: undefined,
}

const Results = ({ items }) => {
  return items.length === 0 ? null : (
    <section className="callout primary">
      {items.map((item) => (
        <ResultsItem
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
          rating={item.rating}
          previewUrl={item.previewUrl}
        />
      ))}
    </section>
  )
}

// 👇🏾 convert to a TypeScript interface props definition
Results.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      rating: PropTypes.oneOf(['G', 'PG', 'PG-13', 'R']),
      previewUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

const App = ({ numItems }) => {
  const items = ITEMS.slice(0, numItems)

  return (
    <main>
      <h1>Giphy!</h1>

      <Results items={items} />
    </main>
  )
}

// 👇🏾 convert to a TypeScript interface props definition
App.propTypes = {
  numItems: PropTypes.number,
}
App.defaultProps = {
  numItems: 10,
}

export default App
