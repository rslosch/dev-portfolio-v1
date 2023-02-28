import React from 'react'

import { motion } from 'framer-motion'

const FullNameText = () => {
    const parent = {
        initial: {
            opacity: 0,
            y: -30
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 2,
                delayChildren: 0.5,
                staggerChildren: 2,
                ease: "easeOut"
            }
        }
    }

    const gradient = {
        initial: {},
        animate: {
            backgroundPosition: ["0%", "-200%"],
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }

    const reflection = {
        initial: {
            rotate: 180,
            scaleX: -1,
            opacity: 1,
            filter: "blur(8px)",
        },
        animate: {
            y: 0, 
            filter: "blur(0px)", 
            opacity: 0,
            transition: {
                y: {duration: 0.2, ease: "easeInOut"},
                filter: {duration: 8},
                opacity: {duration: 4, ease: "easeInOut"}
            }
        }
    }

  return (
    <motion.div 
        variants={parent}
        initial="initial"
        animate="animate"
        className='relative select-none'
    >
        <motion.h1 
            variants={gradient}
            className='absolute top-0 left-0 z-10 text-transparent bg-gradient-to-r from-primary-3 via-secondary-3 to-primary-3 bg-clip-text whitespace-nowrap text-8xl font-bold bg-200%'
        > steven losch </motion.h1>
        <motion.h1
            variants={reflection}
            className='absolute top-16 left-0 blur-md z-10 text-transparent bg-gradient-to-r from-primary-3 via-secondary-3 to-primary-3 bg-clip-text whitespace-nowrap text-8xl font-bold bg-200%'
        > steven losch </motion.h1>
    </motion.div>
  )
}

export default FullNameText