import { useState,useEffect } from 'react'
import ProjectCard from '../UI/ProjectCard'
import ProjectFilter from '../UI/ProjectFilter'
import './Project.css'
import axiosInstance from '../axios'
function Project() {
  const [projectdata, setProjectData]=useState([]);
  const [educationdata, setEducationData]= useState([]);

    // getting educaiton data
    const get_ProjectData = () =>{
      axiosInstance.get('projects/projects/').then(response =>{
        setProjectData(response.data)
        console.log(response.data)
      })
    }
    const get_EducationData = () =>{
      axiosInstance.get('info/education/').then(response =>{
        setEducationData(response.data)
        console.log(response.data)
      })
    }

    useEffect(() =>{
      get_ProjectData();
      get_EducationData()
    },[])
  return (
    <section className='ProjectsSection' id='Projects__Section'>
      <div className='ProjectsSection__text'>Want to see my <span className='ProjectsSection__text_highlight'>Projects ?</span></div>
      <div className='ProjectsSection__line'></div>
      <div>
      <div className='ProjectsSection__header'>Projects</div>
      <ProjectFilter/>

      <div className='Projects__wrapper'>

      {projectdata.results && projectdata.results.map((item) => (
          // <li key={item.id}>
          //   <p>Title: {item.title}</p>
          //   <p>Caption: {item.caption}</p>
          //   <p>Type: {item.type}</p>
          //   <p>Status: {item.status}</p>
          //   {/* Add more fields as needed */}
          // </li>
          <ProjectCard content={item}/>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Project