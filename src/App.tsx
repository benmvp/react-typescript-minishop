import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    <nav style={{ marginTop: '2rem' }}>
      <ul className="vertical menu">
        <li>
          <span>Step 1 - Props</span>
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
          <span>Step 2 - Hooks</span>
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
          <span>Step 3 - Events &amp; Callbacks</span>
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

        <li>
          <span>Step 4 - APIs &amp; Utilities</span>
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
  <Router>
    <Switch>
      <Route path="/step-1/final/bonus-1">
        <Step1FinalBonus1 />
      </Route>
      <Route path="/step-1/final/bonus-2">
        <Step1FinalBonus2>some children</Step1FinalBonus2>
      </Route>
      <Route path="/step-1/final">
        <Step1Final />
      </Route>
      <Route path="/step-1/teach">
        <Step1Teach />
      </Route>
      <Route path="/step-1">
        <Step1 />
      </Route>

      <Route path="/step-2/final/bonus-1">
        <Step2FinalBonus1 />
      </Route>
      <Route path="/step-2/final/bonus-2">
        <Step2FinalBonus2 />
      </Route>
      <Route path="/step-2/final">
        <Step2Final />
      </Route>
      <Route path="/step-2/teach">
        <Step2Teach />
      </Route>
      <Route path="/step-2">
        <Step2 />
      </Route>

      <Route path="/step-3/final/bonus-1">
        <Step3FinalBonus1 />
      </Route>
      <Route path="/step-3/final/bonus-2">
        <Step3FinalBonus2 />
      </Route>
      <Route path="/step-3/final">
        <Step3Final />
      </Route>
      <Route path="/step-3/teach">
        <Step3Teach />
      </Route>
      <Route path="/step-3">
        <Step3 />
      </Route>

      <Route path="/step-4/final/bonus-1">
        <Step4FinalBonus1 />
      </Route>
      <Route path="/step-4/final/bonus-2">
        <Step4FinalBonus2 />
      </Route>
      <Route path="/step-4/final">
        <Step4Final />
      </Route>
      <Route path="/step-4/teach">
        <Step4Teach />
      </Route>
      <Route path="/step-4">
        <Step4 />
      </Route>

      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)

export default App
