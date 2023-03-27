import SideNavBar from "./components/SideNavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Listen from "./pages/Listen"
import { Route, Routes } from 'react-router-dom'
import React, { useEffect,useState } from 'react';
import BlogPost from './components/BlogPost'
import {AnimatePresence} from "framer-motion";

function App() {

  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://personal-website-back-end-production.up.railway.app/api/blogs/');
      const data = await res.json();
      setBlogData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
    fetchData();
  }, []);

  return (
    <div>
      <SideNavBar/>
      <div className='dummyMargin'></div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/blog" element={<Blog blogData={blogData}/>}/>
          <Route exact path="/listen" element={<Listen/>}/>
          {blogData.map(blog => (
            <Route key={blog._id} path={`/blog/${blog.title.replace(/\s+/g, '-')}`} element={<BlogPost data={blog} />} />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
