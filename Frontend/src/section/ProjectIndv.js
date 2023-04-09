import './ProjectIndv.css'
import { useParams } from 'react-router-dom'
import React from 'react'
import { fetchProject } from '../features/ProjectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react'

function ProjectIndv({}) {
    const dispatch= useDispatch()
    const {id}= useParams();
    const project = useSelector((state) => state.projects)
    useEffect(() =>{
        const controller = new AbortController()
        dispatch(fetchProject(id))

        // return () => {
        //   controller.abort()
        // }
      },[dispatch,id]);

  return (






    <div className="single-project-wrapper">
    <div className="single-project-header">
        <div className="single-project-header-text">

            <h2 className="header-title"></h2>
            {project.project && project.project.title}

            <h2 className="header-caption">
            {project.project && project.project.title}
            </h2>
        </div>
        <div className="single-project-header-side-content">
            <div className="single-project-type">
                <span>
                {project.project && project.project.title}
                  </span>
            </div>
            <div className="single-project-pills">
                {/* {% for tag in projects.tags.all %} */}
                <span className="single-project-pill">tag</span>
                {/* {% endfor %} */}
            </div>
        </div>
    </div>
    <div className="single-project-thumbnail">
        <div className="single-project-links">

            <div className="project-raw">
            {project.project && project.project.title}
                {/* <a href="{project.project.github_link}"><img src="{% static 'images\knowme\mdi_github.svg' %}"/></a>

                <a href="{project.project.kaggle_link}"><img src="{% static 'images\knowme\simple-icons_kaggle.svg' %}"/></a> */}

            </div>

            <div className="view-demo">
                <a href="{project.project && project.project.title}"><span> VIEW DEMO</span></a>
            </div>
        </div>
        <img className="single-project-thumbnail-image" src=""/>

    </div>
    <div className="single-project-description">
    {project.project && project.project.title}
    </div>
    </div>
  )
}

export default ProjectIndv