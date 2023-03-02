import { useState, useEffect } from 'react'

import Cursor from './components/Cursor'
import ProjectDisplay from './components/ProjectDisplay'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import gradients from './data/gradients'

import { motion } from 'framer-motion'

function App() {

	const [color1, setColor1] = useState('')
	const [color2, setColor2] = useState('')
	const [colorToggle, setColorToggle] = useState(false)
	const [previousRandomIndex, setPreviousRandomIndex] = useState(-1)

	useEffect(() => {
		let randomIndex = Math.floor(Math.random() * gradients.length)
		while (randomIndex === previousRandomIndex) {
		  randomIndex = Math.floor(Math.random() * gradients.length)
		}
		setPreviousRandomIndex(randomIndex)
	  
		const randomGradient = gradients[randomIndex]
		setColor1(randomGradient.color1)
		setColor2(randomGradient.color2)
	}, [colorToggle])

  return (	
	<div className="fixed top-0 bottom-0 left-0 right-0 overflow-y-auto font-syne box-border bg-black">
		<Cursor color1={color1} color2={color2} />
		<div className="flex items-start lg:items-center justify-center h-full max-w-screen lg:max-h-screen lg:h-screen lg:overflow-hidden box-border leading-5">
			<motion.div 
				initial={{opacity: 0}} 
				animate={{opacity:1, transition:{duration: 2}}} 
				className="relative flex items-center justify-between w-screen box-border max-w-[1280px] p-2 sm:p-6 h-screen lg:max-h-[800px]"
			>
				<div className=''>
					<svg 
						className='pointers-events-none w-[300px] h-[300px] absolute top-0 left-0'
						xmlns="http://www.w3.org/2000/svg" 
					>
						<defs>
							<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0" style={{stopColor: color1}}/>
								<stop offset=".5" style={{stopColor: color2}}/>
								<stop offset="1" style={{stopColor: color1}}/>
							</linearGradient>
						</defs>
						<path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"/>
					</svg>
				</div>
				<div className='p-4 sm:p-8 z-[2] select-none overflow-hidden flex-wrap basis-auto rounded '> 

					<header className='flex justify-between'></header>
					<ProjectDisplay color1={color1} color2={color2} setColorToggle={setColorToggle}/>

					<div>
						<svg 
							className='pointers-events-none w-[300px] h-[300px] absolute bottom-0 right-0'
							xmlns="http://www.w3.org/2000/svg" 
						>
							<defs>
								<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0" style={{stopColor: color1}}/>
									<stop offset=".5" style={{stopColor: color2}}/>
									<stop offset="1" style={{stopColor: color1}}/>
								</linearGradient>
							</defs>
							<path fill="url('#grad2')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"/>
						</svg>
					</div>
				</div>
			</motion.div>
		</div>
	</div>
  )
}

export default App

