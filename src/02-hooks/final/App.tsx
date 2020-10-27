import React, { useState, useEffect, useRef } from 'react'

type Direction = 'right' | 'left'

const App = () => {
  const [x, setX] = useState(50)
  const [dir, setDir] = useState('right' as Direction)
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
