


import './AboutMeCard.css'
import React from 'react'
import './AboutMeCard.css'
import { motion,AnimatePresence } from 'framer-motion'

function AboutMeCard(props) {
    const {data,cardtype} = props
  return (
        <AnimatePresence>
    <motion.div
  animate={{ x: 0}}
  initial={{ x: 100 }}
  transition={{
    ease: "linear",
    duration: 2,
    x: { duration: 1 }
  }} className="AboutMeCard__wrapper">
    <div className='AboutMeType'>{cardtype}</div>


{ data.map((edu) => (
  <div key={edu.id} className='AboutMeCard__wrapper__content'>
      <div className="AboutMeCard__asthetic">
        <span className="AboutMeCard__asthetic__circle"></span>
        <div className="AboutMeCard__asthetic__line"></div>
      </div>
      <div className="AboutMeCard__content">
        <div className="AboutMeCard__degree">{edu.title}</div>
        <div className="AboutMeCard__year">{edu.period}</div>
        {/* <div className="AboutMeCard__school">{edu.college}</div> */}
        {edu.company && <div className="AboutMeCard__company">{edu.company}</div>}
        {edu.college && <div className="AboutMeCard__school">{edu.college}</div>}
        {edu.platform && <div className="AboutMeCard__platform">{edu.platform}</div>}
      </div>
    </div>
))}


    </motion.div>

    </AnimatePresence>
  )
}

export default AboutMeCard