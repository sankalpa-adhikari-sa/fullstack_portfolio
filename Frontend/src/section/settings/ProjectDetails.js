import React, {useState} from 'react'
import ProjectForm from '../Forms/ProjectForm'
import './ProfileEducation.css'

function ProjectDetails() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <section className='ProfileEducation__section'>
      <div  className='section__collapsable'>
        <div onClick={() => setIsOpen((prevState) => !prevState)} className='section__collapsable__header'>
          <span>Add Project</span>
          <span>&#10095;</span>
        </div>
        {isOpen && (
          <ProjectForm/>
        )}
      </div>
    </section>
  )
}

export default ProjectDetails