import './NavbarSection.css'
import Navbar from '../UI/Navbar'
import Logo from  '../Icons/Logo.svg'
function NavbarSection() {
  return (
    <div className='NavbarSection__wrapper'>
      <img src={Logo} alt='Logo' className='Logo'/>
      <Navbar />
    </div>
  )
}

export default NavbarSection