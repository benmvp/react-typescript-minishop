import React, { useState, useEffect, useRef, useReducer } from 'react'

interface AppState {
  count: number
  lastDecremented: number
  lastIncremented: number
}
type Action =
  | { type: 'decrement'; decTime: number }
  | { type: 'increment'; incTime: number }

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'decrement': {
      return {
        ...state,
        count: state.count - 1,
        lastDecremented: action.decTime,
      }
    }
    case 'increment': {
      return {
        ...state,
        count: state.count + 1,
        lastIncremented: action.incTime,
      }
    }
    default: {
      throw new Error()
    }
  }
}

interface CounterReducerProps {
  initialCount?: number
}
const CounterReducer = ({ initialCount = 0 }: CounterReducerProps) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    lastDecremented: Date.now(),
    lastIncremented: Date.now(),
  })

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>
        Last Decremented: {new Date(state.lastDecremented).toLocaleTimeString()}
      </p>
      <p>
        Last Incremented: {new Date(state.lastIncremented).toLocaleTimeString()}
      </p>
      <button
        type="button"
        className="button"
        onClick={() => dispatch({ type: 'decrement', decTime: Date.now() })}
      >
        -
      </button>
      <button
        type="button"
        className="button"
        onClick={() => dispatch({ type: 'increment', incTime: Date.now() })}
      >
        +
      </button>
    </div>
  )
}

const FocusInput = () => {
  const inputEl = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input type="text" ref={inputEl} />
      <button
        className="button"
        onClick={() => {
          inputEl.current?.focus()
        }}
      >
        Focus
      </button>
    </div>
  )
}

interface DelayerProps {
  time?: number
}
const Delayer = ({ time = 1000 }: DelayerProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // do something
    }, time)

    return () => clearTimeout(timer)
  }, [time])

  return null
}

type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

const Defined = () => {
  const [justify, setJustify] = useState('space-between' as JustifyContent)

  return (
    <div
      className="callout primary"
      style={{ display: 'flex', justifyContent: justify }}
    >
      <button className="button" onClick={() => setJustify('flex-start')}>
        flex-start
      </button>
      <button className="button" onClick={() => setJustify('center')}>
        center
      </button>
      <button className="button" onClick={() => setJustify('flex-end')}>
        flex-end
      </button>
      <button className="button" onClick={() => setJustify('space-between')}>
        space-between
      </button>
      <button className="button" onClick={() => setJustify('space-around')}>
        space-around
      </button>
    </div>
  )
}

interface CounterProps {
  initialCount?: number
}

const CounterState = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button
        type="button"
        className="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  )
}

const App = () => (
  <>
    <CounterState />
    <hr />
    <Defined />
    <hr />
    <Delayer />
    <hr />
    <FocusInput />
    <hr />
    <CounterReducer />
  </>
)

export default App
