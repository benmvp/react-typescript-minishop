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

const Example = ({
  message,
  count = 5,
  children,
  style,
  ...remainingProps
}: Props) => {
  if (remainingProps.status === 'failed') {
    return null
  }

  return (
    <section>
      <div>{message}</div>
      <div style={style}>{count}</div>
      {children}
      <pre>{JSON.stringify(remainingProps, null, 2)}</pre>
    </section>
  )
}

const App = () => {
  return (
    <Example style={{ color: 'blue', fontSize: 80 }} status="success">
      <span>One</span>
    </Example>
  )
}

export default App
