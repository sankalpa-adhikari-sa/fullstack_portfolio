import './Pagination.css'
import React, { useState } from 'react'

function Pagination() {
  const [filter, setFilter]= useState('');
  return (
    <div className="pagination">
        <a className="pagination-btn" href="/">&#10094;</a>
        <span className="pagination-btn-now" >2</span>
        <a className="pagination-btn"  href="/">&#10095;</a>
    </div>
  )
}

export default Pagination