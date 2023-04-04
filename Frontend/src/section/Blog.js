import BlogCard from '../UI/BlogCard'
import BlogCardSmall from '../UI/BlogCardSmall'
import ProjectFilter from '../UI/ProjectFilter'
import './Blog.css'
import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'

function Blog() {
  const [width, setWidth]= useState(0);
  const  carousel= useRef();
  useEffect(()=>{
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);
  return (
    <section className='Blog__Section' id='Blog__Section'>
      <div className='ProjectsSection__text'>Want to see my <span className='ProjectsSection__text_highlight'>Blogs ?</span></div>
      <div className='ProjectsSection__line'></div>
      <div >
      <div className='ProjectsSection__header'>Blogs</div>
      <ProjectFilter/>

      <div className='Projects__wrapper'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <motion.div ref={carousel} className='smallblogstry'>
        <motion.div drag='x' dragConstraints={{right:0, left: -width}} className='inner__smallblogstry'>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
          <BlogCardSmall/>
        </motion.div>
      </motion.div>
      </div>
      </div>
    </section>
  )}


export default Blog