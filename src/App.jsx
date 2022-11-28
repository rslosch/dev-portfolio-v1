import { useState } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-5xl w-11/12 mx-auto">
      <Intro />
      <Portfolio />
    </div>
  )
}

export default App

