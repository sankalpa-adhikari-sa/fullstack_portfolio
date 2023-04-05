import './EducationForm.css'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { createEducationData } from '../../features/educationSlice';
function EducationForm() {
    const dispatch= useDispatch();
    const [educationForm, setEducationForm]= useState({
      "title": '',
      "period": '',
      "college": ''
    })

    const handleInputChange = (e) =>{
      setEducationForm(
        {
          ...educationForm,
          [e.target.name]: e.target.value
        }
      );
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(educationForm.title)
      dispatch(createEducationData(educationForm));
      setEducationForm({
        "title": '',
        "period": '',
        "college": ''
      })
    };

  return (
    <form  onSubmit={handleSubmit} className='Form__wrapper'>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={educationForm.title}
        onChange={handleInputChange}
        placeholder="Enter your title"
        required
      />

      <label htmlFor="period">Period</label>
      <input
        type="text"
        id="period"
        name="period"
        value={educationForm.period}
        onChange={handleInputChange}
        placeholder="Enter your period"
        required
      />

      <label htmlFor="college">College</label>
      <input
        type="text"
        id="college"
        name="college"
        value={educationForm.college}
        onChange={handleInputChange}
        placeholder="Enter your college"
        required
      ></input>

      <button type="submit">Submit</button>
    </form>
  )
}

export default EducationForm