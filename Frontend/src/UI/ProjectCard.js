import './ProjectCard.css'
import {Tag} from './Tag'
import { Link } from 'react-router-dom'
function ProjectCard(content) {
    const project = content
  return (
    <Link className='ProjectCard__Link' to={`/project/${project.content.id}`}>
    <div className='ProjectCard__wrapper'>
        <img className='ProjectCard__thumnail' src="https://images.unsplash.com/photo-1679087624010-4bd878cc8fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="React" />
        <div className='ProjectCard__Content'>
            <div className='ProjectCard__Content__caption'>
                <span className='ProjectCard__Content__caption__createddate'>
                    Feb 13
                </span>
                <span className='ProjectCard__Content__caption__readtime'>
                    2 min
                </span>
            </div>
            <h3 className='ProjectCard__Content__title'>
               {project.content.title}
            </h3>
            <div className='ProjectCard__Content__subtitle'>
            {project.content.caption}
            </div>
            <div className='ProjectCard__Content__body'>
            {project.content.description}
            </div>
            <div className='Project__TagComponent__wrapper'>
            <Tag/>
            <Tag/>
            <Tag/>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard