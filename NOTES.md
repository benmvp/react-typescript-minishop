# NOTES

## Step 2 - Hooks

- `useState` (infers types from initial value)
  - Will need to specify type if default is `null` or enum value
- `useEffect` (ensures return value is a void function)
- `useRef`
- `useReducer`
  - need to define the action type
  - infers state type from reducer return value + initial value must be accurate + switch statement

## Step 3 - Events & Callbacks

- typing `onChange` props
  - pass `set*` from `useState` as an `onChange`
- handling DOM events

## Step 4 - API & Utilities

- typing response from APIs
- typing utility functions
- typing custom hooks

## Quiz

- Add filters for page size + rating
- Display title (w/ link), rating
