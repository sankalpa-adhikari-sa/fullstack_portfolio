import './ProjectFilter.css'
import ProjectIcon  from '../IconsComponents/Projects'
import DataScienceIcon  from '../IconsComponents/DataScience'
import DataAnalyticsIcon  from '../IconsComponents/DataAnalytics'
import AgriculturalEngineeringIcon  from '../IconsComponents/AgriculturalEngineering'
import  { useState } from 'react'
import { setFilteroptions } from '../features/BlogsSlice'
import { useDispatch } from 'react-redux'
function ProjectFilter() {

  const dispatch= useDispatch()

  const handleClick= (filterValue) =>{

    dispatch(setFilteroptions(filterValue))

  }
  return (
    <div className='Projects__filter'>
    <div onClick={()=> handleClick('')} className='Projects__filter__option'>
      <ProjectIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>All</span>
    </div>
    <div onClick={()=> handleClick('DATA SCIENCE')} className='Projects__filter__option'>
      <DataScienceIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>DataScience</span>
    </div>
    <div onClick={()=> handleClick('DATA ANALYTICS')} className='Projects__filter__option'>
      <DataAnalyticsIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>DataAnalytics</span>
    </div>
    <div  onClick={()=> handleClick('AGRICULTURAL ENGINEERNG')} className='Projects__filter__option'>
      <AgriculturalEngineeringIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>Agriculture</span>
    </div>
    <div  onClick={()=> handleClick('OTHERS')} className='Projects__filter__option'>
      <ProjectIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>Others</span>
    </div>

  </div>
  )
}

export default ProjectFilter