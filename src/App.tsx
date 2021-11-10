import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Step1 from './01-props/App'
import Step1Teach from './01-props/teach/App'
import Step1Final from './01-props/final/App'
import Step1FinalBonus1 from './01-props/final/App.bonus-1'
import Step1FinalBonus2 from './01-props/final/App.bonus-2'

import Step2 from './02-hooks/App'
import Step2Teach from './02-hooks/teach/App'
import Step2Final from './02-hooks/final/App'
import Step2FinalBonus1 from './02-hooks/final/App.bonus-1'
import Step2FinalBonus2 from './02-hooks/final/App.bonus-2'

import Step3 from './03-events/App'
import Step3Teach from './03-events/teach/App'
import Step3Final from './03-events/final/App'
import Step3FinalBonus1 from './03-events/final/App.bonus-1'
import Step3FinalBonus2 from './03-events/final/App.bonus-2'

import Step4 from './04-api/App'
import Step4Teach from './04-api/teach/App'
import Step4Final from './04-api/final/App'
import Step4FinalBonus1 from './04-api/final/App.bonus-1'
import Step4FinalBonus2 from './04-api/final/App.bonus-2'

const Index = () => (
  <main>
    <h1>TypeScript for React Developers Minishop</h1>
    <nav
      style={{
        marginTop: '2rem',
        display: 'flex',
      }}
    >
      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 1 - Props</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-1">Exercises</Link>
            </li>
            <li>
              <Link to="/step-1/final">Final</Link>
            </li>
            <li>
              <Link to="/step-1/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-1/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-1/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 3 - Events &amp; Callbacks</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-3">Exercises</Link>
            </li>
            <li>
              <Link to="/step-3/final">Final</Link>
            </li>
            <li>
              <Link to="/step-3/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-3/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-3/teach">Teach</Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 2 - Hooks</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-2">Exercises</Link>
            </li>
            <li>
              <Link to="/step-2/final">Final</Link>
            </li>
            <li>
              <Link to="/step-2/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-2/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-2/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 4 - APIs &amp; Utilities</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-4">Exercises</Link>
            </li>
            <li>
              <Link to="/step-4/final">Final</Link>
            </li>
            <li>
              <Link to="/step-4/final/bonus-1">Final (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-4/final/bonus-2">Final (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-4/teach">Teach</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </main>
)

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="/step-1" element={<Step1 />} />
      <Route path="/step-1/teach" element={<Step1Teach />} />
      <Route path="/step-1/final" element={<Step1Final />} />
      <Route path="/step-1/final/bonus-1" element={<Step1FinalBonus1 />} />
      <Route
        path="/step-1/final/bonus-2"
        element={<Step1FinalBonus2>some children</Step1FinalBonus2>}
      />

      <Route path="/step-2" element={<Step2 />} />
      <Route path="/step-2/teach" element={<Step2Teach />} />
      <Route path="/step-2/final" element={<Step2Final />} />
      <Route path="/step-2/final/bonus-1" element={<Step2FinalBonus1 />} />
      <Route path="/step-2/final/bonus-2" element={<Step2FinalBonus2 />} />

      <Route path="/step-3" element={<Step3 />} />
      <Route path="/step-3/teach" element={<Step3Teach />} />
      <Route path="/step-3/final" element={<Step3Final />} />
      <Route path="/step-3/final/bonus-1" element={<Step3FinalBonus1 />} />
      <Route path="/step-3/final/bonus-2" element={<Step3FinalBonus2 />} />

      <Route path="/step-4" element={<Step4 />} />
      <Route path="/step-4/teach" element={<Step4Teach />} />
      <Route path="/step-4/final" element={<Step4Final />} />
      <Route path="/step-4/final/bonus-1" element={<Step4FinalBonus1 />} />
      <Route path="/step-4/final/bonus-2" element={<Step4FinalBonus2 />} />
    </Routes>
  </BrowserRouter>
)

export default App
