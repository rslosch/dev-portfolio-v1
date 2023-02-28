import React, { useState } from 'react'

import { motion } from 'framer-motion'


const StretchText = ({text, indexStretch }) => {

    const [hover, setHover] = useState(false)

    const characters = text.split('').map((letter, index) => {
        if (indexStretch.includes(index)) {
            return (
                <motion.h1
                    key={index}
                    layout
                    // transition={{type: 'spring', damping: 5.5}}
                    transition={{duration: 0.1, type: 'spring', stiffness: 50}}

                    style={{ scaleX: hover? 1 : 1.5}}
                    className={`text-secondary-1 ${hover ? "self-end" : "self-center mx-2"} `}
                >{letter}</motion.h1>
            )
        } else {
            return (
                <motion.h1 layout key={index}  className="self-center">{letter}</motion.h1>
            )
        }
    })
  return (
    <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // whileHover={{x:"-10%", scaleX: 0.8, transition: {duration: 0.3, type: 'spring', damping: 8}}}
        whileHover={{x:"-10%", scaleX: 0.8, transition: {duration: 0.2, type: 'spring', stiffness: 50}}}

        className={`min-w-3/5 flex uppercase font-semibold text-4xl md:text-7xl mb-1 md:mb-2 my-4`}
    > 
        <div className='relative flex'>
            {characters}
            <motion.div 
                initial={{width: 0 }}
                animate={{width: hover ? "100%" : 0, backgroundPosition: ["-100%", "100%"]}}
                transition={{duration: 0.5, ease: "easeInOut"}}
                className="absolute h-1 left-0 bottom-0  bg-gradient-to-r from-secondary-5 via-primary-gray-3 to-primary-4 bg-left bg-200% "
            >
            </motion.div>
        </div>   
    </motion.div>
    
  )
}

export default StretchText