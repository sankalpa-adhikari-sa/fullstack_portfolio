import './Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import AboutMeIcon from '../Icons/AboutMe.svg'
import React from 'react'
import axiosInstance from '../axios'
import { Navigate } from 'react-router-dom';
function Sidebar() {
  const navigate= useNavigate();
  const handleClick = () => {
    console.log('Div clicked!');
    const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/login');
  };
  return (
    <div className='Settings__Section__Sidebar__wrapper'>
    <div className='Settings__Section__Sidebar'>
      <div className='Settings__Section__Sidebar__option'>
        <div className='Settings__Section__Sidebar__option__header'>Profile</div>
        <Link to="profile/details" className='Settings__Section__Sidebar__suboption'>
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Details</span>
        </Link>
        <Link to="profile/education" className='Settings__Section__Sidebar__suboption'>
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Education</span>
        </Link>
        <Link to="profile/certificate" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Certificates</span>
        </Link>
        <Link to="profile/experience" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Experience</span>
        </Link>
      </div>
      <div className='Sidebar__hline'></div>
      <div className='Settings__Section__Sidebar__option'>
        <div className='Settings__Section__Sidebar__option__header'>Project</div>
        <Link to="project/details" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Details</span>
        </Link>
        <Link to="project/tags" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Tags</span>
        </Link>
      </div>
      <div className='Sidebar__hline'></div>
      <div className='Settings__Section__Sidebar__option'>
        <div className='Settings__Section__Sidebar__option__header'>Blogs</div>
        <Link to="blog/details" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Details</span>
        </Link>
        <Link to="blog/tags" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Tags</span>
        </Link>
      </div>
      <div className='Sidebar__hline'></div>
      <div className='Settings__Section__Sidebar__option'>
        <div className='Settings__Section__Sidebar__option__header'>Messages</div>
        <Link to="messages" className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Message</span>
        </Link>
      </div>
      <div className='Sidebar__hline'></div>
      <div onClick={handleClick} className='Settings__Section__Sidebar__option'>
        <div className='Settings__Section__Sidebar__option__header'>Logout</div>
        <div  className='Settings__Section__Sidebar__suboption' >
          <img src={AboutMeIcon} alt='AboutMeIcon' className='SidebarIcons AboutMeIcon'/>
          <span className='SidebarOption__text'>Logout</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar