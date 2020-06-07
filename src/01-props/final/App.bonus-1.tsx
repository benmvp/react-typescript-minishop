import React from 'react'
import { ITEMS, Rating } from '../data'

interface ResultsItemProps {
  id: string
  title: string
  url: string
  rating?: Rating
  previewUrl: string
}
const ResultsItem = ({
  id,
  title,
  url,
  rating,
  previewUrl,
}: ResultsItemProps) => {
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

interface ResultsProps {
  items: ResultsItemProps[]
}
const Results = ({ items }: ResultsProps) => {
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

interface Props {
  numItems?: number
}
const App = ({ numItems = 10 }: Props) => {
  const items = ITEMS.slice(0, numItems)

  return (
    <main>
      <h1>Giphy!</h1>

      <Results items={items} />
    </main>
  )
}

export default App
