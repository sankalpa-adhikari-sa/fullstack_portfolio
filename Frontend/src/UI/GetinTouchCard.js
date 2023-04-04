import './GetinTouchCard.css'
import LinkedinIcon from '../IconsComponents/Linkedin'
import GithubIcon from '../IconsComponents/Github'
import KaggleIcon from '../IconsComponents/Kaggle'
import FacebookIcon from '../IconsComponents/Facebook'
import InstagramIcon from '../IconsComponents/Instagram'
import React from 'react'

function GetinTouchCard() {
  return (
    <div className='GetinTouchCard__wrapper'>
      <div className='GetinTouchCard__header'>Get in Touch</div>
      <div className='GetinTouchCard__contents'>
          <LinkedinIcon className='GetinTouchCard__icon'/>
          <GithubIcon className='GetinTouchCard__icon'/>
          <KaggleIcon className='GetinTouchCard__icon'/>
          <FacebookIcon className='GetinTouchCard__icon'/>
          <InstagramIcon className='GetinTouchCard__icon'/>
      </div>
    </div>
  )
}

export default GetinTouchCard