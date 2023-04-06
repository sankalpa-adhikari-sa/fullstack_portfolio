import './Pagination.css'
import React from 'react'

function Pagination() {
  return (
    <div class="pagination">
        <a class="pagination-btn" href="/">&#10094;</a>
        <span class="pagination-btn-now" >2</span>
        <a class="pagination-btn"  href="/">&#10095;</a>
    </div>
  )
}

export default Pagination