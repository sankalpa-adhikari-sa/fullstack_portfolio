import './ProjectFilter.css'
import ProjectIcon  from '../IconsComponents/Projects'
import DataScienceIcon  from '../IconsComponents/DataScience'
import DataAnalyticsIcon  from '../IconsComponents/DataAnalytics'
import AgriculturalEngineeringIcon  from '../IconsComponents/AgriculturalEngineering'

function ProjectFilter() {
  return (
    <div className='Projects__filter'>
    <div className='Projects__filter__option'>
      <ProjectIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>All</span>
    </div>
    <div className='Projects__filter__option'>
      <DataScienceIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>DataScience</span>
    </div>
    <div className='Projects__filter__option'>
      <DataAnalyticsIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>DataAnalytics</span>
    </div>
    <div className='Projects__filter__option'>
      <AgriculturalEngineeringIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>Agriculture</span>
    </div>
    <div className='Projects__filter__option'>
      <ProjectIcon className='Projects__filter__option__icon'/>
      <span className='Projects__filter__option__text'>Others</span>
    </div>

  </div>
  )
}

export default ProjectFilter