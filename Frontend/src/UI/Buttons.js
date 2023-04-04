import './Buttons.css'
import resume from '../Icons/Resume.svg'
import React from 'react'

function Buttons() {
  return (
    <div>Buttons</div>
  )
}

function Buttonswithicons() {
  return (
    <div className='Buttonswithicons__wrapper'>
      <span className='Buttonswithicons__text'>Download CV</span>
      <img className='Buttonswithicons__icon' src={resume} alt="avatar" />
    </div>
  )
}


export  {Buttonswithicons}