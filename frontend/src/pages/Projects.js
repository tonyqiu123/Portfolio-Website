import React, { useEffect } from 'react';
import '../css/all.css'
import '../css/projects.css'
import Project from '../components/Project'
import AnimatedPage from '../components/AnimatedPage'
import jobportal from '../images/allProjectPhotos/jobportal.webp'
import friendaccounting from '../images/allProjectPhotos/friendaccounting.webp'
import tonyswebdesigns from '../images/allProjectPhotos/tonyswebdesigns.webp'
import brightbearsinfo from '../images/allProjectPhotos/brightbearsinfo.webp'
import codetoday from '../images/allProjectPhotos/codetoday.webp'
import presotea from '../images/allProjectPhotos/presotea.webp'

function Projects() {
  return (

    <AnimatedPage>
      <section className='title column'>
        <h1>All Projects</h1>
        <div className='projectsContainer column'>
          <div className='row project'>
            <h6>NAME</h6>
            <p className='tools'>TOOLS</p>
            <p className='responsibilities'>DESCRIPTION</p>
            <p className='date'>DATE</p>
          </div>

          <Project image='https://cdn.discordapp.com/attachments/715319623637270638/1153808419820670986/image_6.png' name="Spotify Playlist Image Generator" tools="React, FastAPI, CockroachDB, SQL, CSS" responsiblities="Spotify Playlist Image Generator" date="September 2023" href="https://devpost.com/software/funny-name?ref_content=user-portfolio&ref_feature=in_progress" />

          <Project image='https://cdn.discordapp.com/attachments/715319623637270638/1153808136981979166/image_5.png' name="Website Traffic Tracker" tools="React, Node, MongoDB, CSS" responsiblities="Website Traffic Tracker" date="August 2023" href="https://web-analytics-three.vercel.app/dashboard?domain=tonyqiu.ca" />

          <Project image='https://cdn.discordapp.com/attachments/715319623637270638/1153807615571267625/image_4.png' name="Next/React Component Library" tools="Next, TypeScript, CSS" responsiblities="Next/React Component Library" date="July 2023" href="https://50-days-of-components.vercel.app/accordion" />

          <Project image='https://cdn.discordapp.com/attachments/715319623637270638/1153807093212659782/Frame_1.png' name="Modern Job Portal" tools="React, Node, MongoDB, CSS" responsiblities="Job Portal + Admin CMS" date="Aug 2022" href="https://company-job-portal.netlify.app/demo" />

          <Project image={friendaccounting} name="Friend Accounting" tools="HTML, CSS, JavaScript" responsiblities="Tax Accounting Firm Website" date="Feb 2023" href="https://friendaccounting.com/en/index" />
          <Project image={tonyswebdesigns} name="Tony's Web Designs" tools="HTML, CSS, JavaScript" responsiblities="Personal Business Website" date="Jul 2022" href="https://tonyswebdesigns.ca/" />
          <Project image={brightbearsinfo} name="BrightBearsInfo" tools="HTML, CSS, JavaScript" responsiblities="Educational Organization Website" date="May 2022" href="https://brightbearsinfo.com/" />
          <Project image={codetoday} name="codeToday" tools="HTML, CSS, JavaScript" responsiblities="High School Club Website" date="Feb 2021" href="https://codetoday.tonyqiu1.repl.co/" />
          <Project image={presotea} name="My First Website" tools="HTML, CSS" responsiblities="Presotea Replica Website" date="Jan 2021" href="https://test.tonyqiu1.repl.co/index.html" />
        </div>
      </section>
    </AnimatedPage>
  )
}

export default Projects