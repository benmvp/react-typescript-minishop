# Step 3 - Events & Callbacks

When dealing with events, whether those defined by form elements or those defined as props on components, we need to pass callback functions. And the type definitions of these callback functions have to have to match exactly in order for the code to properly type-check.

🏅 The goal of this step is to learn how to properly annotate callback functions and rely on type inference as much as possible.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling because of TypeScript errors, and it's preventing you from working on the next step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 2 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Providing type-checked event handlers to form and form element events
- Defining function props in components
- Making use of type inference with function callbacks

## 📝 Learn

When dealing with form and form element handlers you can rely on a special form of type inference called [contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing) to avoid having to write type annotations for the event variable:

```ts
const Form = () => {
  const [name, setName] = useState('')

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          // `e` is inferred to be a React.ChangEvent<HTMLInputElement>
          // because the function is defined when assigned to `onChange`
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="help-text">Your name is: {name}</p>
    </form>
  )
}
```

However, if the handler is defined separately, a type annotation is required:

```ts
const Form = () => {
  // set up state + other logic

  // since `handleSubmit` is defined on its own, it has to specify
  // the correct type annotations in order to be assigned to
  // the `onSubmit` prop
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // do something w/ form data
  }

  return <form onSubmit={handleSubmit}>{/* form UI */}</form>
}
```

Components can define their own "events" by exposing function props. Unlike React [prop types](https://reactjs.org/docs/typechecking-with-proptypes.html), function props must be **fully** defined in TypeScript:

```ts
interface FormProps {
  // `onSubmit` is expected to be a function that takes a single object parameter
  // with 2 properties: `name` & `likeReact`. It will return nothing
  onSubmit: (fields: { name: string; likeReact: boolean }) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState('')
  const [likeReact, setLikeReact] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 👇🏾 `onSubmit` must be called with the correct arguments of the right types
    onSubmit({ name, likeReact })
  }

  // render
}
```

Just like with form element events, the callbacks passed to "custom events" must also type-match, ensuring that the handler is always in sync the component:

```ts
const App = () => {
  const [fields, setFields] = useState({ name: '', likeReact: true })
  return (
    <>
      <Form
        // `setFields` from `useState` and `onSubmit` have identical signatures
        // so `setFields` can be passed directly as the handler
        onSubmit={setFields}
      />

      <dl>
        <dt>Name</dt>
        <dd>{fields.name}</dd>

        <dt>Like React</dt>
        <dd>{fields.likeReact ? 'Yes' : 'No'}</dd>
      </dl>
    </>
  )
}
```

Contextual typing comes in handy in many other cases, especially function callbacks passed to Array iteration methods like `.map()`:

```ts
interface ResultsProps {
  items: {
    id: string
    title: string
    url: string
    rating?: 'G' | 'PG' | 'PG-13' | 'R'
    previewUrl: string
  }[]
}
const Results = ({ items }: ResultsProps) => {
  return items.length === 0 ? null : (
    <section className="callout primary">
      {items.map((item) => (
        // `item` is inferred to be the object
        <ResultsItem
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
          rating={item.rating}
          previewUrl={item.previewUrl}
        />
      ))}
    </section>
  )
}
```

## 💡 Exercises

Display the results of the submitted `<SearchForm />`:

1. Add `onChange` handlers to the search query field and the number of results drop down to call their respective state setters
1. Map over the values in `NUM_RESULTS_TIERS` to generate `<option>` elements within the results `<select>`
1. Define the `onSubmit` prop in `SearchFormProps` and use them to define the props for `SearchForm`
1. Call the `onSubmit` prop with `query` & `numResults` when the form is submitted
1. In `App`, call `setFields` with the submitted data, adding in `lastSubmitted: Date.now()`

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

## 🤓 Bonus!

### 1. Allow for configurable initial filter values

Instead of `SearchForm` hard-coding the initial values of the `query` & `numRatings` state variables, add `initialQuery` & `initialNumRatings` props that initialize the variables. Make `initialQuery` optional, but `initialNumRatings` required. `App` can now set initial values for the props.

### 2. Add a ratings filter

Assuming the following ratings options data:

```ts
type RatingFilter = '' | 'g' | 'pg' | 'pg-13' | 'r'
const RATING_FILTERS = [
  { value: '', label: 'All' },
  { value: 'g', label: 'G' },
  { value: 'pg', label: 'PG' },
  { value: 'pg-13', label: 'PG-13' },
  { value: 'r', label: 'R' },
] as { value: RatingFilter; label: string }[]
```

...and a rating option radio button that looks like:

```jsx
<input
  type="radio"
  name="rating"
  value={value}
  id={`rating-${value}`}
  checked={}
  onChange={}
/>
<label htmlFor={`rating-${value}`}>{label}</label>
```

...add UI for also filtering by rating. The `SearchForm` will need to maintain a `rating` state that it can thing pass when calling the `onSubmit` handler. `App` should display the selected rating using its `label` property.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+3+-+Events+/+Callbacks). It will help seal in what you've learned.

## 👉🏾 Next Step

Go to [Step 4 - APIs & Utilities](../04-api).

## 📕 Resources

- [Contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)
- [React function prop types](https://www.benmvp.com/blog/react-prop-types-with-typescript/#function-types)
- [Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!
