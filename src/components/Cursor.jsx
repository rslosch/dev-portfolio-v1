import React, { useEffect, useState} from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {

	const [mousePositionLarge, setMousePositionLarge] = useState({
		x:0,
		y:0
	  })
    const [mousePositionSmall, setMousePositionSmall] = useState({
		x:0,
		y:0
	})
    const [isClicked, setIsClicked] = useState(false)
	  
	  useEffect(() => {
		const mouseMove = (e) => {
		  setMousePositionLarge({
			x: e.clientX,
			y: e.clientY
		  })
          setMousePositionSmall({
            x: e.clientX,
            y: e.clientY
          })
		}

        const handleClick = () => {
            setIsClicked(true)
            setTimeout(() => {
              setIsClicked(false)
            }, 300)
          }      
	  
		window.addEventListener("mousemove", mouseMove)
        window.addEventListener("click", handleClick)
	  
		return () => {
		  window.removeEventListener("mousemove", mouseMove)
            window.removeEventListener("click", handleClick)
		}
	  })
	  
	  const cursorLarge = {
		default: {
            scale: isClicked ? 2 : 1,
            x: mousePositionLarge.x -16,
            y: mousePositionLarge.y -16,
            transition: {type:"spring", dampness:10, scale:{duration: 0.15, ease: "easeInOut"}}
		}
	  }

      const cursorSmall = {
        default: {
            x: mousePositionSmall.x - 4,
            y: mousePositionSmall.y - 4,
            transition: {duration: 0.05}
        }
      }

  return (
    <div>
        <motion.div variants={cursorLarge} animate="default" className={`pointer-events-none fixed border-2 ${isClicked ? "border-double" : "border-dotted"} border-primary-3 h-8 w-8 rounded-full z-[501]`}></motion.div>
        <motion.div variants={cursorSmall} animate="default" className={`pointer-events-none fixed bg-primary-3 h-2 w-2 rounded-full z-[500]`}></motion.div>
    </div>
    )
}

export default Cursor