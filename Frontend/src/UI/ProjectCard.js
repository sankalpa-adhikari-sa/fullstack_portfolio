import './ProjectCard.css'
import {Tag} from './Tag'
function ProjectCard(content) {
  return (
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
               {content.content.title}
            </h3>
            <div className='ProjectCard__Content__subtitle'>
            {content.content.caption}
            </div>
            <div className='ProjectCard__Content__body'>
            {content.content.description}
            </div>
            <div className='Project__TagComponent__wrapper'>
            <Tag/>
            <Tag/>
            <Tag/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard