import './AboutMe.css'
import AboutMeCard from '../UI/AboutMeCard'
import SkillsCard from '../UI/SkillsCard'
import AboutMeInsightCard from '../UI/AboutMeInsightCard'
import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchEducationData } from '../features/educationSlice'
import { fetchExperienceData } from '../features/experienceSlice'
import { fetchCertificateData } from '../features/certificateSlice'
function AboutMe() {

  const dispatch= useDispatch()
  const education = useSelector((state) => state.education)
  const experience = useSelector((state) => state.experience)
  const certificate = useSelector((state) => state.certificate)
  useEffect(() =>{
    const controller = new AbortController()
    dispatch(fetchEducationData({ signal: controller.signal }))
    dispatch(fetchExperienceData({ signal: controller.signal }))
    dispatch(fetchCertificateData({ signal: controller.signal }))
    return () => {
      controller.abort()
    }
  },[dispatch]);


  return (


  <section className='AboutMe__Section' id='AboutMe__Section'>
    <div className='AboutMeSection__line'></div>
    <div className='AboutMeSection__header'>ABOUT ME</div>
    <div className='AboutMe__Insights'>
      <AboutMeInsightCard />
    </div>
    <div className='AboutMe__wrapper__partone'>
    <AboutMeCard data={education.education_data} cardtype="EDUCATION"/>
    <AboutMeCard data={certificate.certificate_data} cardtype="CERTIFICATE"/>
    <AboutMeCard data={experience.experience_data} cardtype="EXPERIENCE"/>

      {/* <AboutMeCard /> */}

    </div>
    <div className='AboutMe__wrapper__partone'>
      <SkillsCard/>
    </div>
    educationdata
    {/* {education.education_data && education.education_data.map((EDUCATION) =>{
      return(
        <div key={EDUCATION.id}>
          {EDUCATION.title}
          {EDUCATION.period}
          {EDUCATION.college}
        </div>
      )
    })} */}
  </section>
  )
}

export default AboutMe