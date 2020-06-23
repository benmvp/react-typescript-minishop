import React from 'react'
import PropTypes from 'prop-types'
import { ITEMS } from './data'

// replace `any` w/ TypeScript interface props definition 👇🏾
const ResultsItem = ({ id, title, url, rating, previewUrl }: any) => {
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
      <video src={previewUrl} loop autoPlay />
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

// 👇🏾 convert to TypeScript default props
ResultsItem.defaultProps = {
  rating: undefined,
}

// replace `any`  w/ TS props 👇🏾
const Results = ({ items }: any) => {
  return items.length === 0 ? null : (
    <section className="callout primary">
      {items.map((
        item: any, // 👈🏾 remove `any` when TS props are in place!
      ) => (
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

// replace `any`  w/ TS props 👇🏾
const App = ({ numItems }: any) => {
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

// 👇🏾 convert to TypeScript default props
App.defaultProps = {
  numItems: 10,
}

export default App
