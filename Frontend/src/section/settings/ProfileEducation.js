import React, {useState} from 'react'
import AboutMecard from '../../UI/AboutMeCard'
import EducationForm from '../Forms/EducationForm';
import './ProfileEducation.css'
function ProfileEducation() {
  const [isOpen, setIsOpen]= useState(false);

  return (
    <section className='ProfileEducation__section'>
      <div  className='section__collapsable'>
        <div onClick={() => setIsOpen((prevState) => !prevState)} className='section__collapsable__header'>
          <span>Add Education</span>
          <span>&#10095;</span>
        </div>
        {isOpen && (
          <EducationForm/>
        )}
      </div>
    <AboutMecard/>
    </section>
  )
}

export default ProfileEducation