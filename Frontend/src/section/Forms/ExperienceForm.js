import './ExperienceForm.css'
import React,{useState} from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
function ExperienceForm() {
    const navigate= useNavigate();
    const [title, setTitle] = useState("");
    const [period, setPeriod] = useState("");
    const [company, setCompany] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      axiosInstance.post('info/experience/',
        {
          "title": title,
          "period": period,
          "company": company
      }).then((res) =>
      navigate('/settings/profile/experience'))
      setTitle('')
      setPeriod('')
      setCompany('')
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

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter your company"
        required
      ></input>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ExperienceForm