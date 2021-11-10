import React from 'react'

const App = () => {
  // Ex 1. - Convert `x` & `dir` into state variables using `useState`
  // `dir` can *only* be 'right' or 'left'
  const x = 50
  const dir = 'right'

  // Ex 2. - Convert `offsetLeft` into another state variable.
  // Retrieve the `offsetLeft` of the <image> element using `useRef` +
  // `useEffect` every time `x` changes
  // ex: imageRef.current?.offsetLeft
  const offsetLeft = 0

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
            // Ex 1. - Toggle `dir` state
          }}
        >
          {dir}
        </button>
      </div>
      <p>Image calculated pos: {offsetLeft}</p>
      <img
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
          // Ex 1. - Decrement/increment `x` state by 5 according to `dir`
        }}
      />
    </main>
  )
}

export default App
