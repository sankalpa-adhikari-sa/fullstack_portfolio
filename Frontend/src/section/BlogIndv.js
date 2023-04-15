import './BlogIndv.css'
import { useParams } from 'react-router-dom'
import React from 'react'
import { fetchBlog } from '../features/BlogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Github from '../IconsComponents/Github'
import Kaggle from '../IconsComponents/Kaggle'

function BlogIndv({}) {
    const dispatch= useDispatch()
    const {id}= useParams();
    const blog = useSelector((state) => state.blogs)
    useEffect(() =>{
        const controller = new AbortController()
        dispatch(fetchBlog(id))

        // return () => {
        //   controller.abort()
        // }
      },[dispatch,id]);
      const richtextdata= blog.blog && blog.blog.body

  return (






    <div className="single-project-wrapper">
    <div className="single-project-header">
        <div className="single-project-header-text">

            <h2 className="header-title">
            {blog.blog && blog.blog.title}
            </h2>
            <h2 className="header-caption">
            {blog.blog && blog.blog.title}
            </h2>
        </div>
        <div className="single-project-header-side-content">
            <div className="single-project-type">
                <span>
                {blog.blog && blog.blog.type}
                  </span>
            </div>
            <div className="single-project-pills">
                {/* {% for tag in projects.tags.all %} */}
                {blog.blog && blog.blog.tags.map((tag) =>{
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
                {blog.blog && blog.blog.github_link ? (
                    <a href={blog.blog.github_link}><Github/></a>
                ) : null}
                {blog.blog && blog.blog.kaggle_link ? (
                    <a href={blog.blog.kaggle_link}><Kaggle/></a>
                ) : null}

            </div>
            {blog.blog && blog.blog.demo_link ? (
                    <div className="view-demo">
                        <a href={blog.blog && blog.blog.demo_link}><span> VIEW DEMO</span></a>
                    </div>
                ) : null}

        </div>
        <img className="single-project-thumbnail-image" src={blog.blog && blog.blog.thumbnail}/>

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

export default BlogIndv