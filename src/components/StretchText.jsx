import React, { useState } from 'react'

import { motion } from 'framer-motion'


const StretchText = ({text, indexStretch }) => {

    const [hover, setHover] = useState(false)
    
    const stretchVariants = {
        hover: { scaleX: 1.5 }
    }

    const characters = text.split('').map((letter, index) => {
        if (indexStretch.includes(index)) {
            return (
                <motion.div
                    key={index}
                    layout
                    transition={{type: 'spring', damping: 4.3}}
                    className={`text-primary-green-1 ${hover ? "" : 'mx-4'}`}


                    style={{ scaleX: hover? 1 : 1.85}}
                >{letter}</motion.div>
            )
        }
        return (
            <motion.div layout key={index}  className="self-center">{letter}</motion.div>
        )
    })

  return (
    <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{x:"-10%", scaleX: 0.8, transition: {duration: 0.3, type: 'spring', damping: 4.8}}}
        className={`min-w-2/5 top-0 flex ${hover ? 'justify-start' : 'justify-start'} uppercase text-4xl md:text-7xl mb-1 md:mb-3 font-medium m-4 left-0`}
    >     
        {characters}
    </motion.div>
  )
}

export default StretchText