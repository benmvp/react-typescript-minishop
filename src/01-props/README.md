# Step 1 - Props

React function components are _functions_ that accept a single object parameter (aka "props") and return JSX. As a result, they can be typed in TypeScript just like any other function in TypeScript. In fact the majority of the typing for React components are in the props.

🏅 The goal of this step is to practice type-checking props in TypeScript.

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- TypeScript environment
- Function component structure
- Declaring props
- Defining default props

## 📝 Learn

TypeScript React component files look and act very much like traditional JavaScript component files except they have types (duh!) and the filenames **must** end in `.tsx`.

React function components are _functions_ that accept a single object parameter (aka "props") and return JSX. As a result, they can be typed in TypeScript just like any other function in TypeScript:

```ts
interface Props {
  // prop definitions
}

const App = (props: Props) => {
  // component logic

  return <div>{/* UI stuff */}</div>
}
```

The `Props` `interface` is where props are defined using TypeScript types:

### Basic Types

| [`prop-types`](https://www.npmjs.com/package/prop-types) | TypeScript                        |
| -------------------------------------------------------- | --------------------------------- |
| `message: PropTypes.string`                              | `message: string`                 |
| `count: PropTypes.number`                                | `count: number`                   |
| `disabled: PropTypes.bool`                               | `disabled: boolean`               |
| `status: PropTypes.oneOf(['success', 'failed'])`         | `status: 'success' \| 'failed'`   |
| `children: PropTypes.node`                               | `children: React.ReactNode`       |
| `onClick: PropTypes.func`                                | `onClick: () => void`             |
| `onChange: PropTypes.func`                               | `onChange: (val: string) => void` |

### Object type

#### `prop-types`

```
style: PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
})
```

#### TypeScript

```
style: {
  color: string
  fontSize: number
}
```

### Array type

#### `prop-types`

```
names: PropTypes.arrayOf(PropTypes.string),
items: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    active: PropTypes.boolean
  })
)
```

#### TypeScript

```
names: string[]
items: {
  id: number,
  title: string,
  active: boolean
}[]
```

Properties of TypeScript interfaces are **required by default** which is opposite of `prop-types` which is optional by default.

| `prop-types`                            | TypeScript           |
| --------------------------------------- | -------------------- |
| `required: PropTypes.string.isRequired` | `required: string`   |
| `optional: PropTypes.bool`              | `optional?: boolean` |

Use destructuring with defaulting to simulate `defaultProps` for optional parameters:

```ts
interface Props {
  children: React.ReactNode
  count: number
  disabled?: boolean
  variant?: 'light' | 'dark'
}

const App = ({
  children,
  count,
  disabled = false,
  variant = 'dark',
}: Props) => {
  // component logic

  return <div>{/* UI stuff */}</div>
}
```

TypeScript functions can also define their return type, but usually it can be inferred by the type of the `return` statement. The type of returned JSX is `JSX.Element`:

```ts
const App = (props: Props): JSX.Element => {
  // component logic

  return <div>{/* UI stuff */}</div>
}
```

## 💡 Exercises

Rename [`App.js`](./App.js) into `App.tsx`, converting the `propTypes` and `defaultProps` into TypeScript `interface` definitions.

(If you run into trouble with the exercises, you can take a peek at the final [source code](./final/App.tsx).)

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

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=TypeScript+For+React+Developers+Minishop&entry.1984987236=Step+1+-+Props). It will help seal in what you've learned.

## 👉🏾 Next Step

Go to [Step 2 - Hooks](../02-hooks).

## 📕 Resources

- [Basic TypeScript Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [TypeScript Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [React Prop Types with TypeScript](https://www.benmvp.com/blog/react-prop-types-with-typescript/)
- [React-specific TypeScript types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/react_prop_type_example)
- [`react/prop-types` ESLint rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!
