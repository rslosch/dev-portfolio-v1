import React from 'react'

import StretchText from './StretchText'

import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <div className="flex items-start justify-center flex-col text-center pt-20 pb-6 font-syne">
      <StretchText text="steven" indexStretch={[0,2,4]}/>
      <StretchText text="projects" indexStretch={[0,1,4]}/>
      <StretchText text="contact" indexStretch={[0,2,5]}/>
    </div>
  )
}

export default Intro

{/* <p className='text-base md:text-xl mb-3 font-medium font-spacegrotesk'>Software Engineer & Web Developer</p> */}

{/* <p className='text-primary-green-4 text-sm max-w-xl mb-6 font-bold font-spacegrotesk'>
I'm a passionate and curious learner, former Accountant and now Software Engineer looking forward to starting a new career.
<br />
After 4 years of accounting classes and a few internships, I decided to change my trajectory and enrolled in FlatIron SE bootcamp. As an Accountant I found myself always learning different accounting software. One day after tediously using a program, I made the decision that I would be the one writing the program.
<br />
During my time at FlatIron, I learned HTML, CSS, Javascript, React, and Ruby on Rails. Below you can find a couple fullstack projects I have worked on.
</p> */}