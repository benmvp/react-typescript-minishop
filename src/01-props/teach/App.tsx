import React from 'react'

interface Item {
  id: number
  title: string
  active: boolean
}

interface Props {
  message?: string
  count?: number
  disabled?: boolean
  status?: 'success' | 'failed'
  children: React.ReactNode
  style?: {
    color: string
    fontSize: number
  }
  names?: string[]
  items?: Item[]
}

const MyComponent = ({
  message,
  count = 5,
  children,
  style,
  ...remainingProps
}: Props) => {
  if (!remainingProps) {
    return null
  }

  return (
    <section>
      <div>{message}</div>
      <div style={style}>{count}</div>
      {children}
    </section>
  )
}

const App = () => {
  return (
    <MyComponent style={{ color: 'blue', fontSize: 80 }}>
      <span>One</span>
    </MyComponent>
  )
}

export default App
