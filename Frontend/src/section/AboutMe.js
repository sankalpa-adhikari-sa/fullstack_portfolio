import './AboutMe.css'
import AboutMeCard from '../UI/AboutMeCard'
import SkillsCard from '../UI/SkillsCard'
import AboutMeInsightCard from '../UI/AboutMeInsightCard'
import { useEffect, useState } from 'react'
import axiosInstance from '../axios'
function AboutMe() {
  const [educationdata, setEducationData]= useState([]);
  const [experiencedata, setExperienceData]= useState([]);
  const [certificatedata, setCertificateData]= useState([]);

  // getting educaiton data
  const get_EducationData = () =>{
    axiosInstance.get('info/education/').then(response =>{
      setEducationData(response.data)
      console.log(response.data)
    })
  }
  // getting experience data
  const get_ExperienceData = () =>{
    axiosInstance.get('info/experience/').then(response =>{
      setExperienceData(response.data)
      console.log(response.data)
    })
  }
  // getting certificate data
  const get_CertificateData = () =>{
    axiosInstance.get('info/certificate/').then(response =>{
      setCertificateData(response.data)
      console.log(response.data)
    })
  }
  useEffect(() =>{
    get_EducationData()
    get_CertificateData()
    get_ExperienceData()
  },[])


  return (

  <section className='AboutMe__Section' id='AboutMe__Section'>
    <div className='AboutMeSection__line'></div>
    <div className='AboutMeSection__header'>ABOUT ME</div>
    <div className='AboutMe__Insights'>
      <AboutMeInsightCard/>
    </div>
    <div className='AboutMe__wrapper__partone'>
      <AboutMeCard educationdata={educationdata}/>
      <AboutMeCard certificatedata={certificatedata}/>
      <AboutMeCard experiencedata={experiencedata}/>
    </div>
    <div className='AboutMe__wrapper__partone'>
      <SkillsCard/>
    </div>
    educationdata
    {educationdata.map((education) =>{
      return(
        <div key={education.id}>
          {education.title}
          {education.period}
          {education.college}
        </div>
      )
    })}
    experiencedata
    {experiencedata.map((experience) =>{
      return(
        <div key={experience.id}>
          {experience.title}
          {experience.period}
          {experience.company}
        </div>
      )
    })}
    certificatedata
    {certificatedata.map((certificate) =>{
      return(
        <div key={certificate.id}>
          {certificate.title}
          {certificate.period}
          {certificate.platform}
          {certificate.link}
        </div>
      )
    })}
  </section>
  )
}

export default AboutMe