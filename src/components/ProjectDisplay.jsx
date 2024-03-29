import React, { useState } from 'react'
import SvgText from './SvgText'
import SvgTextStatic from './SvgTextStatic'
import ProjectItem from './ProjectItem'

import projectsData from '../data/portfolio'

import { motion, AnimatePresence } from 'framer-motion'

const ProjectDisplay = ({ color1, color2, setColorToggle }) => {

    const [currentProject, setCurrentProject] = useState(false)
    const [showWelcome, setShowWelcome] = useState(true)
    const [showWelcomeStatic, setShowWelcomeStatic] = useState(false)


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

    const gradient = {
        initial: {
            backgroundPosition: "0%"
        },
        animate: {
            backgroundPosition: ["0%","100%"],
            transition: {
                backgroundPosition: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                }
            }
        }
    }

    const animateIn = {
        initial: {
            opacity: 0,
            x: -400,
            scaleX: "0%",
        },
        animate: {
            opacity: 1,
            x: 0,
            // scaleX: 1,
            scaleX: "100%",
            transition: {
                duration: 0.15,
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

    const handleClick = (e) => {
        setColorToggle((colorToggle) => !colorToggle)
        // currentTarget is the element that the event listener is attached to, therefore preventing target from being the child element
        const index = e.currentTarget.id
        if (index === currentProject) {
            setCurrentProject(false)
            setShowWelcomeStatic(true)
        } 
        else if(index >= 0 && index < projectsData.length) {
            setCurrentProject(index)
            setShowWelcome(false)
            setShowWelcomeStatic(false)
        } 
        else {
            console.log(`Invalid project index: ${index}`)
        }
    }

    const projectList = projectsData.map((project, index) => {
        return (
            <motion.a key={index} id={index} className="bg-transparent mb-4 no-underline" variants={parent} initial="initial" whileHover="hovered" onClick={(e) => handleClick(e)}>
                <span className=' -left-4 sm:left-0 relative inline-block no-underline'> 
                    {project.title}
                    <motion.span
                        className='absolute left-0 bottom-0 h-0.5 w-full bg-left bg-200%'
                        style={{
                            backgroundImage: `linear-gradient(to right, ${color1}, ${color2} , ${color1} )`
                        }}
                        variants={child}
                    ></motion.span>
                </span>
            </motion.a>
        )
    })

  return (
    <main 
        className='flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between lg:pl-16 box-border'
        style={{height: "calc(100% - 102px)", minHeight: "calc(100% - 102px)"}}
    >
        <div className='h-[300px] md:h-[225px] shrink-0 lg:shrink lg:flex-auto'>
        {/* add a key to ProjectItem so Animate Presence knows a different ProjectItem component is being rendered => knows previous ProjectItem component leaving DOM => fires exit animation */}
        <AnimatePresence mode="wait">
            {projectsData[currentProject] && projectsData.length > 0 && currentProject !== false && (
                <ProjectItem
                    key={projectsData[currentProject].title}
                    project={projectsData[currentProject]}
                    color1={color1}
                    color2={color2}
                />
            )}
            {showWelcomeStatic && (
                <motion.div 
                    className='lg:flex-1'
                    variants={animateIn}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <SvgTextStatic />
                    <span className='relative font-spacegrotesk text-white box-border font-thin font-sm leading-6'>
                        <div 
                            className={`absolute h-full w-0.5 rounded bottom-0 bg-left bg-200%`}
                            style={{
                                backgroundImage: `linear-gradient(45deg, ${color1}, ${color2} , ${color1} )`
                            }}
                            ></div>
                        <p className='ml-4 sm:ml-8'>
                            I'm Steven Losch, a front-end developer with a passion for creating intuitive and modern interfaces. I have developed using technologies like JavaScript, React, Ruby on Rails, and WebFlow. I am a curious learner and I am always looking for new opportunities to grow and improve my skills. 
                        </p>
                    </span>
                </motion.div>
            )}
            </AnimatePresence>
            {showWelcome && (
                <div className='lg:flex-1'>
                    <SvgText />
                    <span className='relative font-spacegrotesk text-white border-box font-thin font-sm leading-6'>
                        <div 
                            className={`absolute h-full w-0.5 rounded bottom-0 bg-left bg-200%`}
                            style={{
                                backgroundImage: `linear-gradient(45deg, ${color1}, ${color2} , ${color1} )`
                            }}
                        ></div>
                        <p className='ml-4 sm:ml-8'>
                            I'm Steven Losch, a front-end developer with a passion for creating intuitive and modern interfaces. I have developed using technologies like JavaScript, React, Ruby on Rails, and WebFlow. I am a curious learner and I am always looking for new opportunities to grow and improve my skills. 
                        </p>
                    </span>
                </div>
            )}
        </div>
        <div className='SPACER lg:flex-1 lg:max-w-[150px] lg:min-w-[90px]'></div>
        {/*Added absolute positioning for mobile... (temp fix) */}
        <div className='MAINPROJECTSRIGHT flex-1/2 lg:flex-auto'>
            <h2 className='text-3xl md:text-5xl my-6 text-white'> PROJECTS </h2>
            <div className='relative lg:flex-1'>
                <motion.div 
                    className='absolute h-full w-full rounded-lg p-0.5 bg-200%'
                    style={{
                        backgroundImage: `linear-gradient(270deg, ${color1}, ${color2}, ${color1} )`,
                        backgroundPosition: "100%"
                    }}
                    variants={gradient}
                    initial="initial"
                    animate = "animate"
                >
                    <div className='absolute w-full h-full rounded-lg bg-black opacity-100'></div>
                    <div className='absolute -left-2 bottom-0 w-1/2 h-1/2 bg-black opacity-100'></div>
                    <div className='absolute right-0 -top-2 w-1/2 h-1/2 bg-black opacity-100'></div>

                </motion.div>
                <div className='relative flex flex-col lg:flex-1 p-8 border-tl font-space-grotesk text-base text-white z-[1]'>
                    {projectList}
                </div>
            </div>
        </div>
        <div className='SPACER lg:flex-1 lg:max-w-[140px] lg:min-w-[70px]'></div>
    </main>
  )  
}

export default ProjectDisplay