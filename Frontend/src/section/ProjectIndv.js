import './ProjectIndv.css'
import { useParams } from 'react-router-dom'
import React from 'react'
import { fetchProject } from '../features/ProjectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Github from '../IconsComponents/Github'
import Kaggle from '../IconsComponents/Kaggle'

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
      const richtextdata= project.project && project.project.body

  return (






    <div className="single-project-wrapper">
    <div className="single-project-header">
        <div className="single-project-header-text">

            <h2 className="header-title">
            {project.project && project.project.title}
            </h2>
            <h2 className="header-caption">
            {project.project && project.project.title}
            </h2>
        </div>
        <div className="single-project-header-side-content">
            <div className="single-project-type">
                <span>
                {project.project && project.project.type}
                  </span>
            </div>
            <div className="single-project-pills">
                {/* {% for tag in projects.tags.all %} */}
                {project.project && project.project.tags.map((tag) =>{
                    return(
                        <span key={tag.id} className="single-project-pill">{tag.name}</span>
                    )
                })}
            </div>
        </div>
    </div>
    <div className="single-project-thumbnail">
        <div className="single-project-links">

            <div className="project-raw">
                {project.project && project.project.github_link ? (
                    <a href={project.project.github_link}><Github/></a>
                ) : null}
                {project.project && project.project.kaggle_link ? (
                    <a href={project.project.kaggle_link}><Kaggle/></a>
                ) : null}

            </div>
            {project.project && project.project.demo_link ? (
                    <div className="view-demo">
                        <a href={project.project && project.project.demo_link}><span> VIEW DEMO</span></a>
                    </div>
                ) : null}

        </div>
        <img className="single-project-thumbnail-image" src={project.project && project.project.thumbnail}/>

    </div>
    <div className="single-project-description">
    <CKEditor
        editor={ClassicEditor}
        data={richtextdata}
        disabled={true}
        config={{

            toolbar: [],
            readOnly: true,
        }}
        className="custom-ck-editor"

      />
    </div>
    </div>
  )
}

export default ProjectIndv