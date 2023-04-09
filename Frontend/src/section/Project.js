import { useState,useEffect } from 'react'
import ProjectCard from '../UI/ProjectCard'
import ProjectFilter from '../UI/ProjectFilter'
import './Project.css'
import { fetchProjectsData } from '../features/ProjectsSlice'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../UI/Pagination'
function Project() {
  const dispatch= useDispatch()
  const projects = useSelector((state) => state.projects)
  const currentPage = useSelector((state) => state.projects.currentPage);
  const filterOptions = useSelector((state) => state.projects.filterOptions);
  const totalPages = useSelector((state) => state.projects.totalPages);

  useEffect(() =>{
    const controller = new AbortController()
    dispatch(fetchProjectsData({ signal: controller.signal }))

    return () => {
      controller.abort()
    }
  },[dispatch]);

  return (
    <section className='ProjectsSection' id='Projects__Section'>
      <div className='ProjectsSection__text'>Want to see my <span className='ProjectsSection__text_highlight'>Projects ?</span></div>
      <div className='ProjectsSection__line'></div>
      <div>
      <div className='ProjectsSection__header'>Projects</div>
      <ProjectFilter/>

      <div className='Projects__wrapper'>


{projects.Project_data.results && projects.Project_data.results.map((proj) =>{
      return(
        <div key={proj.id}>
          <ProjectCard  content={proj}/>
        </div>
      )
    })}

    <Pagination/>
      </div>
      </div>
    </section>
  )
}

export default Project