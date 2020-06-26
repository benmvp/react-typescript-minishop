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

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Type-checking utility functions
- Type-checking JSON data from `fetch`
- Type-checking custom hooks

## 📝 Learn

Functions in TypScript must define the types of their parameters as well as the expected return value. Usually the return type of a function can be inferred based on what the function is returning. But it's a [good practice](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md) to explicitly declare your return type to ensure accidental mistakes.

While React components use the `.tsx` extension, regular utility files use `.ts`.

When specifically dealing with a function wrapping `fetch`, we have to assert that the response data is of a certain type:

```ts
// NOTE: the interface can be a subset of the data returned by the API
interface User {
  login: string
  name: string
  html_url: string
  avatar_url: string
  bio: string
  public_repos: number
  public_gists: number
}

// `username` is a required parameter
const getUser = async (username: string): Promise<User> => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  // assert that `data` is a `User` type
  // async functions auto-wrap the return value in a Promise
  return data as User
}
```

Custom hooks are another special type of utility function. They look like regular functions but act differently in the context of a rendering React component. If your custom hook is returning an array tuple, using a [`const` assertion](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions) is probably the easiest way to provide correct typing:

```ts
// `initialUsername` is optional because of `?` making its type `string | undefined`
const useUserSearch = (initialUsername?: string) => {
  const [username, setUsername] = useState(initialUsername)

  // in order to have a type for `user` state we must assert the type to `User | null`
  const [user, setUser] = useState(null as User | null)

  useEffect(() => {
    if (username) {
      getUser(username).then(setUser)
    } else {
      setUser(null)
    }
  }, [username])

  const handleSubmit = ({ username }: { username: string }) => {
    setUsername(username)
  }

  // use const assertion for the current return type
  return [user, handleSubmit] as const
}
```

## 💡 Exercises

Define the types missing in [`api.ts`](./api.ts). There are a lot of `any` types that need to be replaced with explicit types. Once done, import the type of the `results` state variable in [`App.tsx`](./App.tsx) and replace `any` in the assertion of the type when calling `useState()`.

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

## 🤓 Bonus!

### 1. Custom hook

Create a new file called `useGiphy.ts` to contain your new custom hook. Factor out the 2 `useState()` calls and the `useEffect()` call out of [`App.tsx`](./App.tsx) into `useGiphy.ts`. The custom hook should take a single param for the initial query (optional), and return back a 3-element array tuple containing the results and a setter for new query values, and the query itself.

### 2. Async `useEffect`

Use an `async` function for the call to `getResults()` within `useEffect()` instead of calling `.then()` on its return value.

🔑 _HINT:_ Remember that an `async` function **always** returns a `Promise`, but the only return value allowed for `useEffect()` is the cleanup function callback.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+4+-+API+/+Utilities). It will help seal in what you've learned.

## 👉🏾 Next Step

Go to the [Quiz](../quiz).

## 📕 Resources

- [TypeScript functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [`const` assertions](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!
