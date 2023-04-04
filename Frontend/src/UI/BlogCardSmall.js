import './BlogCardSmall.css'

import React from 'react'

function BlogCardSmall() {
  return (
    <div className='BlogCardSmall__wrapper'>
        <div className='BlogCardSmall__Content'>
        <img className='BlogCardSmall__thumnail' src="https://images.unsplash.com/photo-1679087624010-4bd878cc8fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="React" />
        <div className='BlogCardSmall__Content__caption'>
                <span className='BlogCardSmall__Content__caption__createddate'>
                    Feb 13
                </span>
                <span className='BlogCardSmall__Content__caption__readtime'>
                    2 min
                </span>
        </div>
            <h3 className='BlogCardSmall__Content__title'>
               WHY LEARNING BY HEART IS IMPORTANT?WHY LEARNING BY HEART IS IMPORTANT?
            </h3>
        </div>
    </div>
  )
}

export default BlogCardSmall