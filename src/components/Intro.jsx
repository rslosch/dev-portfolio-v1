import React from 'react'

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Steven Losch</h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>
            I'm a passionate and curious learner, former Accountant and now Software Engineer looking forward to starting a new career.
            <br />
            After 4 years of accounting classes and a few internships, I decided to change my trajectory and enrolled in FlatIron SE bootcamp. As an Accountant I found myself always learning different accounting software. One day after tediously using a program, I made the decision that I would be the one writing the program.
            <br />
            During my time at FlatIron, I learned HTML, CSS, Javascript, React, and Ruby on Rails. Below you can find a couple fullstack projects I have worked on.
        </p>
    </div>
  )
}

export default Intro