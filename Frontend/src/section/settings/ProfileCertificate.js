import React, {useState} from 'react'
import './ProfileEducation.css'
import CertificateForm from '../Forms/CertificateForm';
function ProfileCertificate() {
  const [isOpen, setIsOpen]= useState(false);

  return (
    <section className='ProfileEducation__section'>
      <div  className='section__collapsable'>
        <div onClick={() => setIsOpen((prevState) => !prevState)} className='section__collapsable__header'>
          <span>Add Certificate</span>
          <span>&#10095;</span>
        </div>
        {isOpen && (
          <CertificateForm/>
        )}
      </div>
    </section>
  )
}

export default ProfileCertificate