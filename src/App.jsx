import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
// import { SunIcon, MoonIcon } from './data/icons'

function App() {

  return (
      <div className="text-primary-green-1 bg-primary-eggplant-3 min-h-screen font-syne">
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
          {/* <Portfolio /> */}
          <Footer />
        </div>
      </div>
  )
}

export default App

