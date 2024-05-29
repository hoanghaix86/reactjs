import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Register = () => {
  return <>
    <h3>Register</h3>
    <form action="">
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button type='submit'>Login</button>
    </form>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form action="">
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button type='submit'>Login</button>
      </form>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
