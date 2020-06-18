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

const getUser = async (username: string): Promise<User> => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  return data as User
}

interface FormProps {
  onSubmit: (fields: { username: string }) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const [username, setUsername] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        onSubmit({ username })
      }}
      style={{ maxWidth: 500 }}
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

const useUserSearch = (initialUsername?: string) => {
  const [username, setUsername] = useState(initialUsername)
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

  return [user, handleSubmit] as const
}

const App = () => {
  const [user, handleSubmit] = useUserSearch()

  return (
    <main>
      <Form onSubmit={handleSubmit} />

      <hr />

      {user && (
        <div className="card" style={{ width: 300 }}>
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
