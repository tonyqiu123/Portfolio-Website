import React from 'react';
import '../css/blog.css'
import { Link } from 'react-router-dom'

export default function BlogComponent({ blogData }) {

  const labelComponents = blogData.tags.map((item, index) => {
    return <p className={item} key={index}>{item === "undefined" ? "" : item}</p>
  })

  return (
    <>
      <Link to={`/blog/${blogData.title.replace(/\s+/g, '-')}`} className='blog row'>
        <div className='blogLeft column'>
          <p className='blogDate'>{blogData.date}</p>
          <h4 style={{ whiteSpace: 'normal' }}>{blogData.title}</h4>
          <div className='tagComponentsContainer'>
            {labelComponents}
          </div>
        </div>
        <img src={blogData.image} />
      </Link>
    </>
  )
}
