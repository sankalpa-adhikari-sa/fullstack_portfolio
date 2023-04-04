import './EducationForm.css'
import React,{useState} from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
function ProjectForm() {
    const navigate= useNavigate();
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [tags, setTags] = useState("");
    const [demo_link, setDemo_link] = useState("");
    const [github_link, setGithub_link] = useState("");
    const [kaggle_link, setKaggle_link] = useState("");
    const [other_source_link, setOther_source_link] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [project_date, setProject_date] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      axiosInstance.post('projects/projects/',
        {
          "title": title,
          "caption": caption,
          "type": type,
          "status":status,
          "tags":tags,
          "demo_link":demo_link,
          "github_link": null,
          "kaggle_link": kaggle_link,
          "other_source_link": other_source_link,
          "thumbnail": thumbnail,
          "project_date": project_date,
          "body": body

        }).then((res) =>
      navigate('/settings/project/details'))
      setTitle('')

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

      <label htmlFor="caption">Caption</label>
      <input
        type="text"
        id="caption"
        name="caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter your caption"
        required
      />

      <label htmlFor="type">Type</label>
      <select id='type' name="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="DATA SCIENCE">DATA SCIENCE</option>
        <option value="DATA ANALYTICS">DATA ANALYTICS</option>
        <option value="AGRICULTURAL ENGINEERNG">AGRICULTURAL ENGINEERNG</option>
        <option value="OTHERS">OTHERS</option>
      </select>
      {/* <input
        type="text"
        id="type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Enter your type"
        required
      /> */}
      <label htmlFor="status">Status</label>
      <input
        type="text"
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Enter your status"
        required
      />
      <label htmlFor="tags">tags</label>
      <input
        type="text"
        id="tags"
        name="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Enter your tags"
        required
      />
      <label htmlFor="demo_link">Demo Link</label>
      <input
        type="text"
        id="demo_link"
        name="demo_link"
        value={demo_link}
        onChange={(e) => setDemo_link(e.target.value)}
        placeholder="Enter your Demo Link"
        required
      />
      <label htmlFor="github_link">Github Link</label>
      <input
        type="text"
        id="github_link"
        name="github_link"
        value={github_link}
        onChange={(e) => setGithub_link(e.target.value)}
        placeholder="Enter your Github Link"
        required
      />
      <label htmlFor="kaggle_link">kaggle Link</label>
      <input
        type="text"
        id="kaggle_link"
        name="kaggle_link"
        value={kaggle_link}
        onChange={(e) => setKaggle_link(e.target.value)}
        placeholder="Enter your kaggle Link"
        required
      />
      <label htmlFor="other_source_link">other source Link</label>
      <input
        type="text"
        id="other_source_link"
        name="other_source_link"
        value={other_source_link}
        onChange={(e) => setOther_source_link(e.target.value)}
        placeholder="Enter your other source Link"
        required
      />
      <label htmlFor="thumbnail">thumbnail Link</label>
      <input
        type="file"
        id="thumbnail"
        name="thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        placeholder="Enter your other thumbnail Link"
        required
      />
      <label htmlFor="project_date">Project date</label>
      <input
        type="text"
        id="project_date"
        name="project_date"
        value={project_date}
        onChange={(e) => setProject_date(e.target.value)}
        placeholder="Enter your project date"
        required
      />
      <label htmlFor="body">Body</label>
      <input
        type="text"
        id="body"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter your body"
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm