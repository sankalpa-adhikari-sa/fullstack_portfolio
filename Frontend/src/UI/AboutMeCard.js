import AboutMeContent from '../components/AboutMeContent'
import './AboutMeCard.css'
import { motion,AnimatePresence } from 'framer-motion'

function AboutMeCard() {
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
    <div className='AboutMeType'>EDUCATION</div>
    <AboutMeContent/>
    <AboutMeContent/>
    </motion.div>

    </AnimatePresence>
  )
}

export default AboutMeCard