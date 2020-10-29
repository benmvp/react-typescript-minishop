import React, { useState, useEffect } from 'react'

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
const getUserApi = async (username: string): Promise<User> => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  // assert that the JSON data is a User so that everything
  // else can be type-safe
  return data as User
}

interface FormProps {
  onSubmit: (fields: { username: string }) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const [username, setUsername] = useState('')

  return (
    <form
      method="POST"
      onSubmit={(e) => {
        e.preventDefault()

        onSubmit({ username })
      }}
    >
      <label>
        Enter Github username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <div className="button-group">
        <button type="submit" className="button">
          Search
        </button>
      </div>
    </form>
  )
}

// `initialUsername` is optional because of `?` making its type `string | undefined`
const useUserSearch = (initialUsername?: string) => {
  const [username, setUsername] = useState(initialUsername)

  // in order to have a type for `user` state we must assert the type to `User | null`
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (username) {
      getUserApi(username).then(setUser)
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

const App = () => {
  const [user, handleSubmit] = useUserSearch()

  return (
    <main style={{ width: 300, margin: '0 auto' }}>
      <Form onSubmit={handleSubmit} />

      <hr />

      {user && (
        <div className="card">
          <div className="card-image">
            <a href={user.html_url}>
              <img src={user.avatar_url} alt={user.name} />
            </a>
          </div>
          <div className="card-section">
            <h4>
              {user.name} ({user.login})
            </h4>
            <p>{user.bio}</p>
          </div>
          <div className="card-section">
            <div>
              Repos:{' '}
              <span className="badge" style={{ marginLeft: '0.25rem' }}>
                {user.public_repos}
              </span>
            </div>
            <div>
              Gists:
              <span
                className="badge secondary"
                style={{ marginLeft: '0.25rem' }}
              >
                {user.public_gists}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
