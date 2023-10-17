import React, { useEffect, useRef, useState } from 'react';
import '../css/home.css';
import '../css/all.css'
import '../css/projects.css'
import urlLink from '../images/icons/urlLink.svg'

function Project({ image, name, tools, responsiblities, date, href }) {

  const imageRef = useRef(null)
  const [imageHeight, setImageHeight] = useState(0)

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight)
      document.documentElement.style.setProperty('--image-height', `${imageHeight}px`);
    }
  }, [imageHeight]);

  return (


    <>
      <div className='AProjectCont'>
        <div className='Aproject column'>
          <a target="_blank" href={href} class="projectHover row">
            <div className='projectPadding row project'>
              <div className='h6 row'>
                <h6>{name}</h6>
                <img src={urlLink} />
              </div>
              <p className='tools'>{tools}</p>
              <p className='responsibilities'>{responsiblities}</p>
              <p className='date'>{date}</p>
            </div>
          </a>
          <a target="_blank" href={href} className='projectImage'><img onLoad={() => setImageHeight(imageRef.current.clientHeight)} ref={imageRef} className='projectImage' src={image} /></a>
        </div>
      </div>
    </>

  )
}

export default Project