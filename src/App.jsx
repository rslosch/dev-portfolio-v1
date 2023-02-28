import { useState, useEffect, memo } from 'react'

import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Blobs from './components/Blobs'

import blobsData from './data/blobs'

function App() {

	const displayBlobs = blobsData.map((blob, index) => {
		return (
			<Blobs
				key={index} 
				id={index}
				color1={blob.color1}
				color2={blob.color2}
				xPos={blob.xPos}
				yPos={blob.yPos}
				dAttrValues={blob.dAttrValues}
			/>
		)
	})
  return (
      <div className="relative text-secondary-1 bg-black min-h-screen font-syne">
		<Navbar />
		<Cursor/>
		{displayBlobs}
		<Intro />
      </div>
  )
}

export default App

