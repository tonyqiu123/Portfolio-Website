import React, {useEffect,useState} from 'react';
import '../css/blog.css'
import '../css/all.css'
import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'
const moment = require('moment')

export default function BlogPost({ data }) {

  useEffect(() => {
    fetch(`https://personal-website-back-end-production.up.railway.app/api/blogs/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"viewCount": data.viewCount + 1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [data._id]);


  const date1 = moment(data.date, "MMM DD YYYY");
  const date2 = moment(moment().format("MMM DD YYYY"), "MMM DD YYYY");

  const dateDiff = date2.diff(date1, 'days');

  const tags = data.tags.map((item, index) => {
    return <p className={item} key={index}>{item === "undefined" ? "" : item}</p>
  })


  return (
    <AnimatedPage>
      <section className='BlogPost column'>

        <div className='BlogPost-navigation row'>
          <Link to='/blog' className='BlogPost-goback row'><img src="" /><p>Blogs</p></Link>
          <p>/</p>
          <Link to='' className='BlogPost-goback row'><img src="" /><p>{`${data.title.replace(/\s+/g, '-')}`}</p></Link>
        </div>
        <div className='BlogPost-hero column'>
          <img src={data.image} />
          <p>{data.date}</p>
          <div className='BlogPost-hero-bot column'>
            <div className='tagComponentsContainer row'>
              {tags}
            </div>
            <h2 className='BlogPost-title'>{data.title}</h2>
            <p>{data.summary}</p>
          </div>
        </div>

        <div className='BlogPost-stats'>
          <div className='BlogPost-stat column'>
            <p>Reading Time</p>
            <h6>{(Math.round((Math.floor(data.content.length) / 500) * 100) / 100).toFixed(1)} Minutes</h6>
          </div>
          <div className='BlogPost-stat column'>
            <p>Views</p>
            <h6>{data.viewCount}</h6>
          </div>
          <div className='BlogPost-stat column'>
            <p>Uploaded</p>
            <h6>{dateDiff}&nbsp;days ago </h6>
          </div>
        </div>

        <div className='BlogPost-body column' dangerouslySetInnerHTML={{ __html: data.content }}>


        </div>

      </section>
    </AnimatedPage>
  )
}
