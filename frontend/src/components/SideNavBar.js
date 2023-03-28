import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/all.css'
import desktopLogo from '../images/icons/desktopLogo.svg'
import mobileLogo from '../images/icons/mobileLogo.svg'
import resumePDF from '../images/pdf/resume.pdf'
import home from '../images/icons/home.svg'
import projects from '../images/icons/projects.svg'
import blog from '../images/icons/blog.svg'
import music from '../images/icons/music.svg'
import resume from '../images/icons/resume.svg'

export default function SideNavBar() {
    const [logo, setLogo] = useState(desktopLogo)

    const handleResize = () => {
        if (window.innerWidth < 650)
            setLogo(mobileLogo)
        else
            setLogo(desktopLogo)
    }
    window.addEventListener('resize', handleResize)


    const location = useLocation()
    return (
        <div className='sideNav column'>
            <div className='sideNav-top column'>
                <Link to="/" className='sideNav-logo column'>
                    <img src={logo} />
                </Link>
                <div className='hr'></div>
                <Link to="/" className='sideNav-top-link row' id={location.pathname === '/' ? 'activeNavLink' : ''}>
                    <img src={home} />
                    <p>Home</p>
                </Link>
                <Link to="/projects" className='sideNav-top-link row' id={location.pathname === '/projects' ? 'activeNavLink' : ''}>
                    <img src={projects} />
                    <p>All Projects</p>
                </Link>
                <Link to="/blog" className='sideNav-top-link row' id={location.pathname === '/blog' ? 'activeNavLink' : ''}>
                    <img src={blog} />
                    <p>Blog</p>
                </Link>
                {/* <Link to="/listen" className='sideNav-top-link row' id={location.pathname === '/listen' ? 'activeNavLink' : ''}>
                    <img src={music}/>
                    <p>Listen Along</p>
                </Link> */}
                <div className='hr'></div>
                <Link to={resumePDF} target="_blank" className='sideNav-top-link row'>
                    <img src={resume} />
                    <p>Resume</p>
                </Link>
            </div>

        </div>
    )
}