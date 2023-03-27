import React, { useEffect } from 'react';
import '../css/all.css'
import '../css/projects.css'
import Project from '../components/Project'
import AnimatedPage from '../components/AnimatedPage'

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
    {/* media quries */}
    {/* tailwind css */}
          <Project image="https://cdn.discordapp.com/attachments/715319623637270638/1064087963534905414/image_24.png" name="Friend Accounting" tools="HTML, CSS, JavaScript" responsiblities="Tax Accounting Firm Website" date="Aug 2022" href="https://friendaccounting.com/en/index" />
          <Project image="https://cdn.discordapp.com/attachments/715319623637270638/1064087964084359188/image_27.png" name="Tony's Web Designs" tools="HTML, CSS, JavaScript" responsiblities="Personal Business Website" date="Jul 2022" href="https://tonyswebdesigns.ca/" />
          <Project image="https://cdn.discordapp.com/attachments/715319623637270638/1064087964411498616/image_34.png" name="BrightBearsInfo" tools="React.js, CSS" responsiblities="Educational Organization Website" date="May 2022" href="https://brightbearsinfo.com/" />
          <Project image="https://cdn.discordapp.com/attachments/715319623637270638/1063727419204321370/image_13.png" name="codeToday" tools="HTML, CSS, JavaScript" responsiblities="High School Club Website" date="Feb 2021" href="https://codetoday.tonyqiu1.repl.co/" />
          <Project image="https://cdn.discordapp.com/attachments/715319623637270638/1063727418784894996/image_12.png" name="My First Website" tools="HTML, CSS" responsiblities="Presotea Replica Website" date="Jan 2021" href="https://test.tonyqiu1.repl.co/index.html" />
        </div>
      </section>
    </AnimatedPage>
  )
}

export default Projects