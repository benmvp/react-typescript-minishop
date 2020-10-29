import React, { useState } from 'react'

interface FormProps {
  onSubmit?: (fields: { name: string; likeReact: boolean }) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState('')
  const [likeReact, setLikeReact] = useState(true)

  // since `handleSubmit` is defined on its own, it has to specify
  // the correct type annotations in order to be assigned to
  // the `onSubmit` prop
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 👇🏾 `onSubmit` must be called with the correct arguments of the right types
    if (onSubmit) {
      onSubmit({ name, likeReact })
    }
  }

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

      <hr />

      <input
        type="checkbox"
        id="like-react"
        checked={likeReact}
        // `e` is inferred to be a React.ChangEvent<HTMLInputElement>
        // because the function is defined when assigned to `onChange`
        onChange={(e) => setLikeReact(e.target.checked)}
      />
      <label htmlFor="like-react">Like React?</label>

      <div className="button-group">
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  )
}

const App = () => {
  const [fields, setFields] = useState({ name: '', likeReact: false })

  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
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
    </div>
  )
}

export default App
