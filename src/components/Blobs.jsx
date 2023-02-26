import React from 'react'
import { motion } from 'framer-motion'

const Blobs = ({dAttrValues, color1, color2, xPos, yPos}) => {
  return (
    <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 0.2}}
        transition={{duration:15 }}
        className='absolute w-screen min-h-screen'
    >
        <svg viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="blobSvg" >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: color1}}></stop>
                    <stop offset="100%" style={{stopColor: color2}}></stop>
                </linearGradient>
            </defs>
            <motion.path 
                id="blob" fill="url(#gradient)"
                animate={{x: xPos, y: yPos}}
                transition={{times:[0.1,1], x:{duration: 60, repeat: Infinity, repeatType:"mirror"}, y:{duration: 60, repeat: Infinity, repeatType:"mirror"}, }}
            >
                <animate attributeName='d'
                    dur="20000ms"
                    repeatCount="indefinite"
                    values={dAttrValues}
                >
                </animate>
            </motion.path>
        </svg>
    </motion.div>
  )
}

export default Blobs