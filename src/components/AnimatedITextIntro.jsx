import React from 'react'

import FullNameText from './FullNameText'
import SvgText from './SvgText'

import { motion } from 'framer-motion'

const AnimatedITextIntro = () => {

  return (
    <div className="flex flex-col items-start justify-center">
        <SvgText />
        <FullNameText />
    </div>
    
  )
}

export default AnimatedITextIntro