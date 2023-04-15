import BlogCard from '../UI/BlogCard'
import BlogCardSmall from '../UI/BlogCardSmall'
import BlogFilter from '../UI/BlogFilter'
import './Blog.css'
import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import { fetchBlogsData } from '../features/BlogsSlice'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../UI/Pagination'

function Blog() {
  const dispatch= useDispatch()
  const blogs = useSelector((state) => state.blogs)
  const currentPage = useSelector((state) => state.blogs.currentPage);
  const filterOptions = useSelector((state) => state.blogs.filterOptions);
  const totalPages = useSelector((state) => state.blogs.totalPages);
  const [width, setWidth]= useState(0);
  const  carousel= useRef();
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    const controller = new AbortController()
    dispatch(fetchBlogsData({type: filterOptions.type, signal: controller.signal }))
    return () => {
      controller.abort()

    }
  },[dispatch, filterOptions]);
  return (
    <section className='Blog__Section' id='Blog__Section'>
      <div className='ProjectsSection__text'>Want to see my <span className='ProjectsSection__text_highlight'>Blogs ?</span></div>
      <div className='ProjectsSection__line'></div>
      <div >
      <div className='ProjectsSection__header'>Blogs</div>
      <BlogFilter/>

      <div className='Blogs__wrapper'>

      {blogs.Blog_data.results && blogs.Blog_data.results.map((blog) =>{
      return(
        <div key={blog.id}>
          <BlogCard  content={blog}/>
        </div>
      )
    })}

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