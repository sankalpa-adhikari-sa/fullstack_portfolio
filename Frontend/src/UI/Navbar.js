import { Link } from 'react-router-dom'
import './Navbar.css'
import HomeIcon from '../Icons/Home.svg'
import AboutMeIcon from '../Icons/AboutMe.svg'
import ProjectsIcon from '../Icons/Projects.svg'
import SettingsIcon from '../Icons/Services.svg'
function Navbar() {
  return (
    <div className='Navbar'>
    <div className='Navbar__wrapper Navbar__wrapper__desktop'>
      <Link to='/'>Home</Link>
      <a href='/#AboutMe__Section' >About Me</a>
      <a href='/#Projects__Section'  >Projects</a>
      <a href='/#Blog__Section' >blogs</a>
      <a href='/settings'>Settings</a>
    </div>
    <div  className='Navbar__wrapper Navbar__wrapper__mobile' >
    <Link to='/'>
      <img src={HomeIcon} alt='HomeIcon' className='NavIcons HomeIcon'/>
    </Link>
    <a href='/#AboutMe__Section'>
      <img src={AboutMeIcon} alt='AboutMeIcon' className='NavIcons AboutMeIcon'/>
    </a>
    <a href='/#Projects__Section'>
      <img src={ProjectsIcon} alt='ProjectsIcon' className='NavIcons ProjectsIcon'/>
    </a>
    <a href='/#Blog__Section'>
      <img src={ProjectsIcon} alt='BlogsIcon' className='NavIcons BlogsIcon'/>
    </a>
    <a href='/settings'>
      <img src={SettingsIcon} alt='SettingsIcon' className='NavIcons SettingsIcon'/>
    </a>
    </div>
    </div>

  )
}

export default Navbar