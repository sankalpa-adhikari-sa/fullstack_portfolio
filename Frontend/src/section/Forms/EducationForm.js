import './EducationForm.css'
import React,{useState} from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
function EducationForm() {
    const navigate= useNavigate();
    const [title, setTitle] = useState("");
    const [period, setPeriod] = useState("");
    const [college, setCollege] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      axiosInstance.post('info/education/',
        {
          "title": title,
          "period": period,
          "college": college
      }).then((res) =>
      navigate('/settings/profile/education'))
      setTitle('')
      setPeriod('')
      setCollege('')
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

      <label htmlFor="college">College</label>
      <input
        type="text"
        id="college"
        name="college"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="Enter your college"
        required
      ></input>

      <button type="submit">Submit</button>
    </form>
  )
}

export default EducationForm