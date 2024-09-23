import { useState } from 'react'
import ssulogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ssulogo} className="logo" alt="ssulogo" />
        </a>
        
      </div>
      <h1>SafeSportUnity a private project of the MarBen company 2024</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        <h2>The Web Site is under construction, please come back later
        </h2>
      </p>
    </>
  )
}

export default App
