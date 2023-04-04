import React from 'react'
import './Messages.css'
function Messages() {
  return (
    <section className='Messages__section'>
      <div>Messages</div>
      <div className='Messages__indv__wrapper unread'>
        <div className='Messages__indv__header'>
          <span className='sender__name'>Sankalpa Adhikari</span>
          <div className='recieved_time'> 4/3/2023 2:30 PM</div>

        </div>
        <div className='Messages_content'>
          <span className='sender__email'>Sankalpa.adhikari.sa@gmail.com</span>
          <span className='sender__message'>Hi there this is a messagethere this is a messagethere this is a messagethere this is a messagethere this is a message</span>
        </div>
      </div>
      <div className='Messages__indv__wrapper read'>
        <div className='Messages__indv__header'>
          <span className='sender__name'>Sankalpa Adhikari</span>
          <div className='recieved_time'> 4/3/2023 2:30 PM</div>

        </div>
        <div className='Messages_content'>
          <span className='sender__email'>Sankalpa.adhikari.sa@gmail.com</span>
          <span className='sender__message'>Hi there this is a messagethere this is a messagethere this is a messagethere this is a messagethere this is a message</span>
        </div>
      </div>
    </section>
  )
}

export default Messages