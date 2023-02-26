import { useState, useEffect, memo } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import blobsData from './data/blobs'
import Blobs from './components/Blobs'
import Cursor from './components/Cursor'

// import { SunIcon, MoonIcon } from './data/icons'

function App() {

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
		<Cursor/>
		{displayBlobs}
		<Intro />
		{/* <Portfolio /> */}
		{/* <Footer /> */}
      </div>
  )
}

export default App

