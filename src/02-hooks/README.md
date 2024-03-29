# Step 2 - Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components. From a code perspective, they look and act just like functions so our TypeScript typing for them works a lot like all functions in TypeScript. A function has typed input parameters and a typed return value. As a result, most of the time we can make use of [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html) in order to avoid having to write explicit types.

🏅 The goal of this step is to learn how to use common React hooks with TypeScript. We'll also learn when we need to supply type hints and when we can avoid them by leveraging type inference.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling because of TypeScript errors, and it's preventing you from working on the next step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 1 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Type-checking `useState`, `useEffect` & `useRef`
- Difference between type declarations vs. assertions vs. inference

## 💡 Exercises

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

### 1. `useState`

In [`App.tsx`](./App.tsx), convert the static `x` & `dir` variables into state variables using `useState`. The `dir` state can **only** be `'right'` or `'left'`. Toggle the `dir` state when the button is clicked. Increment or decrement the `x` state by `5` depending on the value of `dir`.

### 2. `useRef`

Create a ref using `useRef` for the `<image>` element. Use `useEffect` to retrieve the [`offsetLeft`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft) of the image. Update a new `offsetLeft` state variable every time the `x` state variable changes.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+2+-+Hooks). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. Use `localStorage`

Store the values of `x` & `dir` in `localStorage` as their values change using `useEffect`. Also, retrieve the `x` & `dir` values from `localStorage` to initialize the respective state variables.

### 2. Optimized `useState`

Although `useState` only uses the initial value once when it creates the state variable, the initial value _itself_ is calculated on every render. This means that we're calling `parseInt(window.localStorage.getItem('x') || '50', 10)` on every render. We're reading from `localStorage` unnecessarily, creating a potential performance bottleneck.

Using [lazy state initialization](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state), only read from `localStorage` during the initial render for `x` & `dir`.

## 📕 Resources

- [Hooks API](https://reactjs.org/docs/hooks-reference.html)
- [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Type assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [TypeScript discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)
- [Four characters can optimize your React component](https://www.benmvp.com/blog/four-characters-optimize-react-component/?utm_source=github&utm_medium=minishop-code&utm_campaign=react-typescript-minishop)
- [Foundation Buttons](https://get.foundation/sites/docs/button.html)

## 👉🏾 Next Step

Go to [Step 3 - Events & Callbacks](../03-events).
