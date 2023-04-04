import './AboutMeInsightCard.css'
import React from 'react'
import avatar from '../Images/default-profile-image.jpg'
import projects from '../Icons/Projects.svg'
import resume from '../Icons/Resume.svg'
import { Buttonswithicons } from './Buttons'
import { motion } from 'framer-motion'

function AboutMeInsightCard() {
  return (
    <div className='AboutMeInsightCard__wrapper'>
        <img className='AboutMeInsightCard__avatar' src={avatar} alt="avatar" />
        <div className='AboutMeInsightCard__contents'>
        <div className='AboutMeInsightCard__row__one'>
            <motion.div   initial={{ scale: 1 }}
  animate={{ y: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
    x: [-10, 10, -10, 10, -5, 5, -2, 2, 0]}}
 className='AboutMeInsightDetailCard'>
                <img className='AboutMeInsightDetailCard__icon' src={projects} alt="avatar" />
                <span className='AboutMeInsightDetailCard__type'>Completed</span>
                <span className='AboutMeInsightDetailCard__caption'>10+</span>
            </motion.div>
            <div className='AboutMeInsightDetailCard'>
                <img className='AboutMeInsightDetailCard__icon' src={projects} alt="avatar" />
                <span className='AboutMeInsightDetailCard__type'>Ongoing</span>
                <span className='AboutMeInsightDetailCard__caption'>10+</span>
            </div>
            <div className='AboutMeInsightDetailCard'>
                <img className='AboutMeInsightDetailCard__icon' src={projects} alt="avatar" />
                <span className='AboutMeInsightDetailCard__type'>Clients</span>
                <span className='AboutMeInsightDetailCard__caption'>10+</span>
            </div>
            <div className='AboutMeInsightDetailCard'>
                <img className='AboutMeInsightDetailCard__icon' src={projects} alt="avatar" />
                <span className='AboutMeInsightDetailCard__type'>EXPERIENCE</span>
                <span className='AboutMeInsightDetailCard__caption'>10+</span>
            </div>
        </div>
        <div className='AboutMeInsightCard__row__two'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className='AboutMeInsightCard__row__three'>
            <Buttonswithicons/>
        </div>

        </div>
    </div>
  )
}

export default AboutMeInsightCard