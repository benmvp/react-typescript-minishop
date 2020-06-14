import React, { useEffect, useRef, useReducer } from 'react'

type Direction = 'right' | 'left'
interface AppState {
  x: number
  dir: Direction
  offsetLeft: number
}
type Action =
  | { type: 'move-x' }
  | { type: 'toggle-dir' }
  | { type: 'set-offsetLeft'; pos: number }

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'move-x': {
      return {
        ...state,
        x: state.x + (state.dir === 'right' ? 5 : -5),
      }
    }
    case 'toggle-dir': {
      return {
        ...state,
        dir: state.dir === 'right' ? 'left' : 'right',
      }
    }
    case 'set-offsetLeft': {
      return {
        ...state,
        offsetLeft: action.pos,
      }
    }
    default: {
      throw new Error()
    }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    x: parseInt(window.localStorage.getItem('x') || '50'),
    dir: (window.localStorage.getItem('dir') || 'right') as Direction,
    offsetLeft: 0,
  })
  const { x, dir, offsetLeft } = state

  useEffect(() => {
    window.localStorage.setItem('x', x.toString())
  }, [x])
  useEffect(() => {
    window.localStorage.setItem('dir', dir)
  }, [dir])

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.offsetLeft) {
      dispatch({ type: 'set-offsetLeft', pos: imageRef.current?.offsetLeft })
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
            dispatch({ type: 'toggle-dir' })
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
          dispatch({ type: 'move-x' })
        }}
      />
    </main>
  )
}

export default App
