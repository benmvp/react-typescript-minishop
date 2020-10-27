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

## ⭐ Concepts

- Providing type-checked event handlers to form and form element events
- Defining function props in components
- Making use of type inference with function callbacks

## 💡 Exercises

In [`App.tsx`](./App.tsx), Display the results of the submitted `<SearchForm />`:

1. Map over the values in `NUM_RESULTS_TIERS` to generate `<option>` elements within the results `<select>`
1. Add `onChange` handlers to the search query field and the number of results drop down to call their respective state setters
1. Define the `onSubmit` prop in `SearchFormProps` and use them to define the props for `SearchForm`
1. Call the `onSubmit` prop with `query` & `numResults` when the form is submitted
1. In `App`, call `setFields` with the submitted data, adding in `lastSubmitted: Date.now()`

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+3+-+Events+/+Callbacks). It will help seal in what you've learned.

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

## 📕 Resources

- [Contextual typing](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing)
- [React function prop types](https://www.benmvp.com/blog/react-prop-types-with-typescript/#function-types)

## 👉🏾 Next Step

Go to [Step 4 - APIs & Utilities](../04-api).
