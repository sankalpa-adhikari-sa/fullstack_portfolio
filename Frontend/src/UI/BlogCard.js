import './BlogCard.css'
import {Tag} from './Tag'
import { Link } from 'react-router-dom'
function BlogCard(content) {
    const blog = content
  return (
    <Link className='BlogCard__Link' to={`/blog/${blog.content.id}`} >
    <div className='BlogCard__wrapper'>
        <img className='BlogCard__thumnail' src="https://images.unsplash.com/photo-1679087624010-4bd878cc8fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="React" />
        <div className='BlogCard__Content'>
            <div className='BlogCard__Content__caption'>
                <span className='BlogCard__Content__caption__createddate'>
                    Feb 13
                </span>
                <span className='BlogCard__Content__caption__readtime'>
                    2 min
                </span>
            </div>
            <h3 className='BlogCard__Content__title'>
            {blog.content.title}
            </h3>
            <div className='BlogCard__Content__body'>
            You’ll be posting loads of engaging content, so be sure to keep your blog . You’ll be posting loads of engaging content, so be sure to keep your blog .
            </div>
            <div className='TagComponent__wrapper'>
            <Tag/>
            <Tag/>
            <Tag/>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default BlogCard