# Step 2 - Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components. From a code perspective, they look and act just like functions so our TypeScript typing for them works a lot like all functions in TypeScript. A function has typed input parameters and a typed return value. As a result, most of the time we can make use of [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html) in order to avoid having to write explicit types.

🏅 The goal of this step is to learn how to use common React hooks with TypeScript. We'll also learn when we need to supply type hints and when we can avoid them by leveraging type inference.

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Type-checking `useState`
- Type-checking `useEffect`
- Type-checking `useRef`
- Type-checking `useReducer`
- Type declarations vs. assertions vs. inference

## 📝 Learn

### `useState`

Without adding any type hints, most of the time you can make use of type inference with `useState`:

```ts
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      {/* likewise for decrement */}
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
```

TypeScript infers that `count` is a number based on the `0` initial value passed into `useState()`. `setCount()` is also a function that takes a number as its only value.

The same happens if the initial value is a variable with a type, like a prop:

```ts
interface CounterProps {
  initialCount?: number
}

const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  // ...
}
```

But if the type is composed of multiple types, the combo type cannot be inferred and you need to specify the type of the state. One way is using [type assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

```ts
type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

const Enum = () => {
  const [justify, setJustify] = useState('space-between' as JustifyContent)

  // ...
}
```

By default `useState` would think that `justify` is a `string`, but it can actually only be 5 values (`JustifyContent`). So we can provide TypeScript a "hint" as to what the initial string represents. And then TypeScript is able to infer the rest.

The same applies to nullable and array types as well.

### `useEffect`

In the `useEffect` hook you cannot return anything except a function. When you do, React will actually complain when the code is run, but TypeScript won't even compile. It'll catch sneaky gotchas like when using implicit returns in arrow functions:

```ts
interface DelayerProps {
  time?: number
}
const Delayer = ({ time = 1000 }: DelayerProps) => {
  useEffect(() =>
    // implicitly returning a timeout value
    setTimeout(() => {
      // ...
    }, time),
  , [time])

  return null
}
```

### `useRef`

The `useRef` hook is primarily used to hold a reference to a DOM element (although it has [other use cases as well](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)). Typically the initial value will be `null`, so similarly to `useState` TypeScript is unable to infer the type. You will need to provide a hint:

```ts
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
```

Based on the types both `inputEl` & `inputEl.current` can be `null`, so we use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to conditionally access the properties. And because the ref type is `HTMLInputElement` it has `.focus()` to call.

> NOTE: Because the type of the ref is `HTMLInputElement`, it can only be set on `<input>` elements

### `useReducer`

The `useReducer` hook is an alternative to `useState` typically preferable when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. We need to define the state shape as well as the available actions:

```ts
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

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
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
```

> NOTE: The `Action` definition uses what's called a [discriminated union](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) to define the available types of actions

## 💡 Exercises

### 1. `useState`

In [`App.tsx`](./App.tsx), convert the static `x` & `dir` variables into state variables using `useState`. The `dir` state can **only** be `'right'` or `'left'`. Toggle the `dir` state when the button is clicked. Increment or decrement the `x` state by `5` depending on the value of `dir`.

### 2. `useEffect`

Store the values of `x` & `dir` in `localStorage` as their values change using `useEffect`. Also, retrieve the `x` & `dir` values from `localStorage` to initialize the respective state variables.

### 3. `useRef`

Create a ref using `useRef` for the `<image>` element. Use `useEffect` to retrieve the [`offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft) of the image. Update a new `offsetLeft` state variable every time the `x` state variable changes.

## 🤓 Bonus!

### 1. `useReducer`

Convert the individual `x`, `dir` & `offsetLeft` state variables into a combined state using `useReducer`. Replace the individual calls to update the state variables, with dispatches on the reducer.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+2+-+Hooks). It will help seal in what you've learned.

## 👉🏾 Next Step

Go to [Step 3 - Events & Callbacks](../03-events).

## 📕 Resources

- [Hooks API](https://reactjs.org/docs/hooks-reference.html)
- [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Type assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)
- [TypeScript discriminated unions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)
- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!
