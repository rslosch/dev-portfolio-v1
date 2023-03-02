import React from 'react'

import { motion } from 'framer-motion'

const ProjectItem = ({ project, color1, color2 }) => {

    const parentHover = {
        initial: {
            scaleX: 1
        },
        hovered: {
            scaleX: 1.15
        },
    }

    const childHover = {
        initial: {
            backgroundPosition: "0%"
        },
        hovered: {
            backgroundPosition: "100%",
        }
    }

    const animateIn = {
        initial: {
            opacity: 0,
            x: 400,
            scaleX: "0%",
        },
        animate: {
            opacity: 1,
            x: 0,
            scaleX: "100%",
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            x: 400,
            scaleX: "0%",
            transition: {
                duration: 0.1,
            },
        }
    }

  return (
      <motion.div 
        className='lg:flex-1'
        variants={animateIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
                variants={parentHover}
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
                        variants={childHover}
                    ></motion.span>
                  </a>
              </motion.button>
              <motion.button
                className='my-4'
                variants={parentHover}
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
                        variants={childHover}
                    ></motion.span> 
                  </a>
              </motion.button>
          </span>
      </motion.div>
  )
}
export default ProjectItem