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
        initial: {
            opacity: 0,
            y: -30
        },
        animate: {
            opacity: 1,
            y: 0,
            backgroundPosition: ["0%", "-200%"],
            transition: {
                opacity: {
                    delay: 2,
                    duration: 0.3, ease: "easeIn"
                },
                y: {
                    delay: 1, duration: 0.3, ease: "easeIn", bounce: 5
                },
                backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }
        }
    }

    const reflection = {
        initial: {
            opacity: 0,
            rotate: 180,
            scaleX: -1,
            filter: "blur(12px)",
        },
        animate: {
            opacity: [0,1,0],
            filter: ["blur(12px)","blur(6px)","blur(0px)"], 
            transition: {
                opacity: {
                    times: [0, 0.8, 1],
                    delay: 0.6, 
                    duration: 6, 
                    ease: "easeInOut"
                },
                filter: {
                    delay:1,
                    times: [0, 0.8, 1],
                    duration: 12
                },           
            }
        }
    }

  return (
    <>
        <motion.h1 
            variants={gradient}
            initial="initial"
            animate="animate"
            className='top-20 absolute z-10 text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 bg-clip-text whitespace-nowrap text-5xl sm:text-7xl md:text-8xl font-bold bg-200%'
        > steven losch </motion.h1>
        <motion.h1
            variants={reflection}
            initial="initial"
            animate="animate"
            className='absolute top-28 sm:top-32 md:top-36 blur-md z-10 text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 bg-clip-text whitespace-nowrap text-5xl sm:text-7xl md:text-8xl font-bold bg-200%'
        > steven losch </motion.h1>
    </>
  )
}

export default FullNameText