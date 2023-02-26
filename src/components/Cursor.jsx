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
	  
		window.addEventListener("mousemove", mouseMove)
	  
		return () => {
		  window.removeEventListener("mousemove", mouseMove)
		}
	  })
	  
	  const cursorLarge = {
		default: {
		  x: mousePositionLarge.x -16,
		  y: mousePositionLarge.y -16,
		  transition: {type:"spring", dampness:5}
		}
	  }

      const cursorSmall = {
        default: {
            x: mousePositionSmall.x - 4,
            y: mousePositionSmall.y - 4,
        }
      }

  return (
    <div>
        <motion.div variants={cursorLarge} animate="default" className='pointer-events-none fixed border-2 border-black h-8 w-8 rounded-full z-[998]'></motion.div>
        <motion.div variants={cursorSmall} animate="default" className="pointer-events-none fixed bg-primary-3 h-2 w-2 rounded-full z-[999]"></motion.div>
    </div>
    )
}

export default Cursor