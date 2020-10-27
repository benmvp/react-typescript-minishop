import React, { useState, useEffect, useRef } from 'react'

type Direction = 'right' | 'left'

const App = () => {
  // Pass a callback to `useState` so that the retrieval from `localStorage`
  // only happens on initial render. The type of `x` is determined by what's
  // returned by the callback.
  // https://www.benmvp.com/blog/four-characters-optimize-react-component/
  const [x, setX] = useState(() =>
    parseInt(window.localStorage.getItem('x') || '50', 10),
  )
  const [dir, setDir] = useState(
    () => (window.localStorage.getItem('dir') || 'right') as Direction,
  )

  useEffect(() => {
    window.localStorage.setItem('x', x.toString())
  }, [x])
  useEffect(() => {
    window.localStorage.setItem('dir', dir)
  }, [dir])

  const [offsetLeft, setOffsetLeft] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.offsetLeft) {
      setOffsetLeft(imageRef.current?.offsetLeft)
    }
  }, [imageRef, x])

  return (
    <main
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          className="button success"
          onClick={() => {
            setDir((prevDir) => (prevDir === 'right' ? 'left' : 'right'))
          }}
        >
          {dir}
        </button>
      </div>
      <p>Image calculated pos: {offsetLeft}</p>
      <img
        ref={imageRef}
        className="thumbnail"
        src="https://media.giphy.com/media/E0cyxhawhe9dm/giphy-downsized.gif"
        alt="Silly cat"
        style={{
          width: '200px',
          position: 'absolute',
          left: `calc(${x}vw - 100px)`,
          top: 'calc(50vh - 100px)',
          cursor: 'pointer',
        }}
        onClick={() => {
          setX((prevX) => prevX + (dir === 'right' ? 5 : -5))
        }}
      />
    </main>
  )
}

export default App
