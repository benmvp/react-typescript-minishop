import React, { useState } from 'react'

interface FormProps {
  initialName?: string
  initialLikeReact?: boolean
  onSubmit: (fields: { name: string; likeReact: boolean }) => void
}

const Form = ({
  initialName = '',
  initialLikeReact = true,
  onSubmit,
}: FormProps) => {
  const [name, setName] = useState(initialName)
  const [likeReact, setLikeReact] = useState(initialLikeReact)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit({ name, likeReact })
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="help-text">Your name is: {name}</p>

      <hr />

      <input
        type="checkbox"
        id="like-react"
        checked={likeReact}
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
    <>
      <Form initialName="Ben" initialLikeReact onSubmit={setFields} />

      <dl>
        <dt>Name</dt>
        <dd>{fields.name}</dd>

        <dt>Like React</dt>
        <dd>{fields.likeReact ? 'Yes' : 'No'}</dd>
      </dl>
    </>
  )
}

export default App
