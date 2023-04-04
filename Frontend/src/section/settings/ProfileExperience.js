import React, {useState} from 'react'
import AboutMeCard from '../../UI/AboutMeCard';
import ExperienceForm from '../Forms/ExperienceForm'
function ProfileExperience() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <section className='ProfileExperience__section'>
    <div  className='section__collapsable'>
      <div onClick={() => setIsOpen((prevState) => !prevState)} className='section__collapsable__header'>
        <span>Add Experience</span>
        <span>&#10095;</span>
      </div>
      {isOpen && (
        <ExperienceForm/>
      )}
    </div>
  <AboutMeCard/>
  </section>
  )
}

export default ProfileExperience