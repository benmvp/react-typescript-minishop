import React, { useState, useEffect, useRef } from 'react'

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

interface ClockProps {
  tickAmount?: number
}

const Clock = ({ tickAmount = 1000 }: ClockProps) => {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date())
    }, tickAmount)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [tickAmount])

  return <p>The time is {time.toLocaleTimeString()}.</p>
}

type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

const Defined = () => {
  const [justify, setJustify] = useState<JustifyContent>('space-between')

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
        onClick={() => setCount((curCount) => curCount - 1)}
      >
        -
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setCount((curCount) => curCount + 1)}
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
    <Clock />
    <hr />
    <FocusInput />
  </>
)

export default App
