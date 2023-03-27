import React, { useState, useEffect } from 'react';
import BlogComponent from '../components/Blog'
import '../css/blog.css'
import AnimatedPage from '../components/AnimatedPage'

const Blog = ({ blogData }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [activeTag, setActiveTag] = useState('');


  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setActiveTag(tag);
  }

  const handleResetClick = () => {
    setSelectedTag(null);
    setActiveTag('');
  }

  let filteredData = blogData;
  if (selectedTag) {
    filteredData = filteredData.filter(blog => blog.tags.includes(selectedTag));
  }

  const uniqueTags = [...new Set(blogData.flatMap(blog => blog.tags))];

  return (
    <AnimatedPage>

      <section className='blogTitle title column'>
        <h1>Blog</h1>
        <div className='row tagButtContainer'>
          <p className={`reset ${activeTag === '' ? 'activeTag' : ''}`} onClick={handleResetClick}>Show All</p>
          {uniqueTags.map(tag => (
            <p key={tag} className={`tagButt ${activeTag === tag ? 'activeTag' : ''}`} onClick={() => handleTagClick(tag)}>{tag}</p>
          ))}
        </div>
        <div className='blogContainer column'>
          {filteredData.map(blog => (
            <BlogComponent
              key={blog._id}
              blogData={blog}
            />
          ))}
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Blog;
