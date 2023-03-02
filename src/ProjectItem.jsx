import React from 'react'

import { motion } from 'framer-motion'

const ProjectItem = ({ project, color1, color2 }) => {

    const parent = {
        initial: {
            scaleX: 1
        },
        hovered: {
            scaleX: 1.15
        },
    }

    const child = {
        initial: {
            backgroundPosition: "0%"
        },
        hovered: {
            backgroundPosition: "100%",
        }
    }
  return (
      <div className='lg:flex-1'>
          <h1 className='text-white text-3xl sm:text-6xl font-syne mb-2'> {project.title} </h1>
          <span className='relative font-spacegrotesk text-white border-box font-thin font-sm'>
              <div 
                  className={`absolute h-full w-0.5 rounded bottom-0 bg-left bg-200%`}
                  style={{
                      backgroundImage: `linear-gradient(45deg, ${color1}, ${color2} , ${color1} )`
                  }}
              ></div>
              <p className='ml-4 sm:ml-8'>
                  {project.description}
              </p>
              <motion.button
                variants={parent}
                initial="initial"
                whileHover="hovered"
                className='my-4'
              >
                  <a className="relative ml-8 pb-px" href={project.websiteLink}> 
                      View Site 
                      <motion.span 
                        className='absolute left-0 bottom-0 h-0.5 w-full bg-left bg-200%'
                        style={{
                            backgroundImage: `linear-gradient(to right, ${color1}, ${color2} , ${color1} )`
                        }}
                        variants={child}
                    ></motion.span>
                  </a>
              </motion.button>
              <motion.button
                className='my-4'
                variants={parent}
                initial="initial"
                whileHover="hovered"
              >
                  <a className="relative ml-8 pb-px" href={project.githubLink}>
                    Github
                    <motion.span 
                        className='absolute left-0 bottom-0 h-0.5 w-full bg-left bg-200%'
                        style={{
                            backgroundImage: `linear-gradient(to right, ${color1}, ${color2} , ${color1} )`
                        }}
                        variants={child}
                    ></motion.span> 
                  </a>
              </motion.button>
          </span>
      </div>
  )
}
export default ProjectItem