import React, { useState } from 'react'

import { motion } from 'framer-motion'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  const parent = {
    initial: {
    },
    open: {
      scale: 0.85
    },
    closed: {}
  }

  const topBurger = {
    initial: {},
    open: {
      rotate: -45,
      translateY: 64
    },
    closed: {}
  }
  const middleBurger = {
    initial: { opacity: 1},
    open: {
      opacity: 0,
      delay: 0.2,
    },
    closed:{}
  }

  const bottomBurger = {
    initial: {originX: "0%", originY: "50%"},
    open: {
      rotate: -45,
      translateY: -64,
      transition: { delay: 0.2, duration: 0.3,}
    },
    closed: {}
  }

  const crossLineVariants = {
    initial: {
      opacity: 1,
    },
    open: {
      translateX: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
    closed: {
      translateX: -40,
      transition: { delay: 0.1, duration: 0.3 },
    },
  }

  const leftCross = {
    initial: {},
    open: {
      rotate: 45,
      delay: 0.3,
      transition: { duration: 0.5}
    },
    closed: {}
  }

  const rightCross = {
    initial: {},
    open: {
      rotate: -45,
      delay: 0.3,
      transition: { duration: 0.5}
    },
    closed: {}
  }

  return (
    <div className='fixed w-full bg-transparent flex justify-end z-[502] p-8'>
      <button className="relative group" onClick={handleClick}>
        <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-white hover:ring-4 hover:ring-primary-3 ${isOpen ? 'ring-opacity-30' : ''} duration-200 shadow-md`}>
          <motion.div initial="initial" animate={isOpen ? "open" : "closed"} variants={parent} className='flex flex-col justify-between w-[20px] h-[20px] origin-center overflow-hidden'>
            <motion.div initial="initial" animate={isOpen ? "open" : "closed"} variants={topBurger} className='bg-secondary-3  h-[2px] w-7'></motion.div>
            <motion.div initial="initial" animate={isOpen ? "open" : "closed"} variants={middleBurger} className='bg-secondary-3  h-[2px] w-7 rounded'></motion.div>
            <motion.div initial="initial" animate={isOpen ? "open" : "closed"} variants={bottomBurger} className='bg-secondary-3  h-[2px] w-7'></motion.div>
            <motion.div initial="initial" animate={isOpen ? "open" : "closed"} variants={crossLineVariants} className={`absolute items-center justify-between top-2.5 flex w-0 ${isOpen ? 'w-12' : ''}`}>
              <motion.div variants={leftCross} className='absolute bg-secondary-3  h-[2px] w-5'></motion.div>
              <motion.div variants={rightCross} className='absolute bg-secondary-3  h-[2px] w-5'></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </button>
    </div>  
  )
}

export default Navbar