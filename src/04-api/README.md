# Step 4 - API & Utilities

Functions are the fundamental building block of any application in JavaScript. They're how you build up layers of abstraction, hide complexity, and reuse functionality. We've already dealt a lot with functions given that React components are Just Functions™, but there some differences when using functions as pure utility/helper functions.

🏅 The goal of this step is to learn how to type-check utility functions.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling because of TypeScript errors, and it's preventing you from working on the next step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 3 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Type-checking utility functions
- Type-checking JSON data from `fetch`
- Type-checking custom hooks

## 💡 Exercises

Define the types missing in [`api.ts`](./api.ts). There are a lot of `any` types that need to be replaced with explicit types. Once done, import the type of the `results` state variable in [`App.tsx`](./App.tsx) and replace `any` in the assertion of the type when calling `useState()`.

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+4+-+API+/+Utilities). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. Custom hook

Create a new file called `useGiphy.ts` to contain your new custom hook. Factor out the 2 `useState()` calls and the `useEffect()` call out of [`App.tsx`](./App.tsx) into `useGiphy.ts`. The custom hook should take a single param for the initial query (optional), and return back a 3-element array tuple containing the results and a setter for new query values, and the query itself.

### 2. Async `useEffect`

Use an `async` function for the call to `getResults()` within `useEffect()` instead of calling `.then()` on its return value.

🔑 _HINT:_ Remember that an `async` function **always** returns a `Promise`, but the only return value allowed for `useEffect()` is the cleanup function callback.

## 📕 Resources

- [TypeScript functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [`const` assertions](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions)

## 👉🏾 Next Step

Go to the [End](../end).
