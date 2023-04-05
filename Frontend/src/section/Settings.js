import './Settings.css'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../UI/Sidebar'
function Settings() {
  return (
    <section className='Settings__Section' id='Settings__Section'>
      <Sidebar/>
      <div className='Settings__Section__content'>
        <Outlet/>
      </div>
      {console.log('this is from settings')}
    </section>
  )
}

export default Settings