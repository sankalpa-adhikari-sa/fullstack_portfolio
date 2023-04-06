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
    console.log(id)
    useEffect(() =>{
        const controller = new AbortController()
        dispatch(fetchProject(id))

        // return () => {
        //   controller.abort()
        // }
      },[dispatch,id]);

  return (
    // <div>
    //     {console.log(project.project.title)}{project.project.title}
    //     {/* {project.project.title}
    //     {project.project.caption}
    //     {project.project.status}
    //     {project.project.type}
    //     {project.project.description} */}
    // </div>

    <div class="single-project-wrapper">
    <div class="single-project-header">
        <div class="single-project-header-text">

            <h2 class="header-title"></h2>
            {/* {console.log('this',project.project)} */}

            <h2 class="header-caption">
            {project.project.caption}
            </h2>
        </div>
        <div class="single-project-header-side-content">
            <div class="single-project-type">
                <span>
                  {project.project.type}
                  </span>
            </div>
            <div class="single-project-pills">
                {/* {% for tag in projects.tags.all %} */}
                <span class="single-project-pill">tag</span>
                {/* {% endfor %} */}
            </div>
        </div>
    </div>
    <div class="single-project-thumbnail">
        <div class="single-project-links">

            <div class="project-raw">
            {project.project.github_link}
                {/* <a href="{project.project.github_link}"><img src="{% static 'images\knowme\mdi_github.svg' %}"/></a>

                <a href="{project.project.kaggle_link}"><img src="{% static 'images\knowme\simple-icons_kaggle.svg' %}"/></a> */}

            </div>

            <div class="view-demo">
                <a href="{project.project.demo_link}"><span> VIEW DEMO</span></a>
            </div>
        </div>
        <img class="single-project-thumbnail-image" src=""/>

    </div>
    <div class="single-project-description">
    {project.project.body}
    </div>
    </div>
  )
}

export default ProjectIndv