
import React from 'react'
import Contact from './section/Contact';
import Home from './section/Home'
import AboutMe from './section/AboutMe';
import Project from './section/Project';
import Blog from './section/Blog';

function StartPage() {
  return (
    <div>
        <Home/>
        <AboutMe/>
        <Project/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default StartPage