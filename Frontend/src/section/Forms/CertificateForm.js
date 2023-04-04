import './CertificateForm.css'
import React,{useState} from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
function CertificateForm() {
    const navigate= useNavigate();
    const [title, setTitle] = useState("");
    const [period, setPeriod] = useState("");
    const [platform, setPlatform] = useState("");
    const [link, setLink] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      axiosInstance.post('info/certificate/',
        {
          "title": title,
          "period": period,
          "platform": platform,
          "link": link
      }).then((res) =>
      navigate('/settings/profile/certificate'))
      setTitle('')
      setPeriod('')
      setPlatform('')
      setLink('')
    };

  return (
    <form  onSubmit={handleSubmit} className='Form__wrapper'>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your title"
        required
      />

      <label htmlFor="period">Period</label>
      <input
        type="text"
        id="period"
        name="period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        placeholder="Enter your period"
        required
      />

      <label htmlFor="platform">Platform</label>
      <input
        type="text"
        id="platform"
        name="platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        placeholder="Enter your Platform"
        required
      />
      <label htmlFor="link">Link</label>
      <input
        type="text"
        id="link"
        name="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter your link"
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default CertificateForm