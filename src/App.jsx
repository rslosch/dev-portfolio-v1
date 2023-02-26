import { useState, useEffect, memo } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import blobsData from './data/blobs'
import Blobs from './components/Blobs'

import { motion } from 'framer-motion'
// import { SunIcon, MoonIcon } from './data/icons'

function App() {

	const [mousePosition, setMousePosition] = useState({
		x:0,
		y:0
	  })
	  
	  useEffect(() => {
		const mouseMove = (e) => {
		  setMousePosition({
			x: e.clientX,
			y: e.clientY
		  })
		}
	  
		window.addEventListener("mousemove", mouseMove)
	  
		return () => {
		  window.removeEventListener("mousemove", mouseMove)
		}
	  })
	  
	  const cursorVariants = {
		default: {
		  x: mousePosition.x -16,
		  y: mousePosition.y -16,
		  transition: {type:"spring", dampness:5}
		}
	  }

	const displayBlobs = blobsData.map(blob => {
		return (
			<Blobs 
				color1={blob.color1}
				color2={blob.color2}
				xPos={blob.xPos}
				yPos={blob.yPos}
				dAttrValues={blob.dAttrValues}
			/>
		)
	})
  return (
      <div className="relative text-secondary-1 bg-primary-gray-4 min-h-screen font-syne">
		<motion.div variants={cursorVariants} animate="default" className='pointer-events-none fixed bg-black h-8 w-8 rounded-full z-[999]'></motion.div>
		{displayBlobs}
		<Intro />
		{/* <Portfolio /> */}
		{/* <Footer /> */}
      </div>
  )
}

export default App

