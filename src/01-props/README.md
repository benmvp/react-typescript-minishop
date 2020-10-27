# Step 1 - Props

React function components are _functions_ that accept a single object parameter (aka "props") and return JSX. As a result, they can be typed in TypeScript just like any other function in TypeScript. In fact the majority of the typing for React components are in the props.

🏅 The goal of this step is to practice type-checking props in TypeScript.

## ⭐ Concepts

- TypeScript environment
- Function component structure
- Declaring props
- Defining default props

## 💡 Exercises

In [`App.tsx`](./App.tsx), convert the `propTypes` and `defaultProps` into TypeScript `interface` definitions using this [React PropTypes with TypeScript guide](https://www.benmvp.com/blog/react-prop-types-with-typescript/?utm_source=github&utm_medium=minishop-code&utm_campaign=react-typescript-minishop).

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+1+-+Props). It will help seal in what you've learned.

## 🤓 Bonus!

### 1. DRY up the types

The prop types for `ResultsItem` & `Results` have lots of overlap. Share TypeScript prop definitions between them. You can also import the `Rating` type from [`data.ts`](./data.ts).

### 2. Add more complex props

For fun, pretend the following prop types also existed on `App`:

```
App.propTypes = {
  numItems: PropTypes.number,

  // 👇🏾 pretend additional prop types
  error: PropTypes.instanceOf(Error),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Error)
  ]),
  children: PropTypes.node.isRequired
}
App.defaultProps = {
  numItems: 10,

  // 👇🏾 pretend additional prop types
  error: undefined,
  value: undefined,
}
```

Convert them into TypeScript prop definitions for `App`. Be sure to pay attention to which props are required/optional.

## 📕 Resources

- [React Prop Types with TypeScript](https://www.benmvp.com/blog/react-prop-types-with-typescript/?utm_source=github&utm_medium=minishop-code&utm_campaign=react-typescript-minishop)
- [Basic TypeScript Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [TypeScript Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [React-specific TypeScript types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/react_prop_type_example)
- [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [`react/prop-types` ESLint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

## 👉🏾 Next Step

Go to [Step 2 - Hooks](../02-hooks).
