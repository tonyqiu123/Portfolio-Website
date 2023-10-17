import '../css/home.css';
import '../css/blog.css'
import '../css/all.css'
import AnimatedPage from '../components/AnimatedPage'
import HomeGrid from '../components/HomeGrid'
import linkedin from '../images/icons/linkedin.svg'
import instagram from '../images/icons/instagram.svg'
import brightbearsinfo from '../images/homeProjectPhotos/brightbearsinfo.webp'
import tonyswebdesigns from '../images/homeProjectPhotos/tonyswebdesigns.webp'
import friendaccounting from '../images/homeProjectPhotos/friendaccounting.webp'
import jobportal from '../images/homeProjectPhotos/jobportal.webp'
import headshot from '../images/headshot.png'

export default function Home() {

  return (
    <AnimatedPage>
      <div className='home'>

        <div className='grid homeIntro column'>
          <div className='column' style={{ maxWidth: '850px', padding: '0' }}>
            <p style={{ marginTop: '-16px' }}>Updated 2023-09-19</p>
            <h3 style={{ marginBottom: '16px' }}>Hey User,</h3>
            <p>Welcome to my portfolio website. The goal of every single project, hobby or business, is to build software with real users through organic reach. I plan to maintain and iterate on:
            <li style={{ marginTop: '16px' }}>
              Modern Job Portal
            </li>
            <li style={{ marginTop: '16px' }}>
              Next/React Component Library
            </li>
            <li style={{ marginTop: '16px' }}>
              Website Traffic Tracker
            </li>
            </p>
            <p>Thanks for visiting my page. I hope to see you again.</p>
            <p>- Tony Qiu</p>
          </div>
          <div className='row'>
            <a href="mailto: tqiu@uwaterloo.ca"><button><p style={{ color: 'white' }}>Contact me</p></button></a>
            <a target="_blank" href='https://github.com/tonyqiu123'><img src='https://cdn.discordapp.com/attachments/715319623637270638/1089321394019512474/Vector.png' /></a>
            <a target="_blank" href='https://www.linkedin.com/in/tonyqiu1/'><img src={linkedin} /></a>
            <a target="_blank" href='https://www.instagram.com/tony_q04/'><img src={instagram} /></a>
          </div>
        </div>


        <div className='grid column' style={{ gridColumn: 'span 7', padding: '0' }}>
          <div className='grid-ImgCover' style={{ backgroundImage: `url("${headshot}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>

        <HomeGrid bgImg='https://cdn.discordapp.com/attachments/715319623637270638/1153802609300340756/image.png' name="Spotify Playlist Image Generator" tools={["React", "FastAPI", "CockroachDB", "SQL", "CSS"]} span="4" gitLink='https://github.com/HanzPo/hack-the-north-2023' url='https://devpost.com/software/funny-name?ref_content=user-portfolio&ref_feature=in_progress' />

        <HomeGrid bgImg='https://cdn.discordapp.com/attachments/715319623637270638/1153800918983249950/Frame_70.png' name="Website Traffic Tracker" tools={["Next", "TypeScript", "Express", "MongoDB", "CSS"]} span="4" gitLink='https://github.com/tonyqiu123/web-analytics' url='https://web-analytics-three.vercel.app/dashboard?domain=tonyqiu.ca' />

        <HomeGrid bgImg='https://cdn.discordapp.com/attachments/715319623637270638/1153800376001245214/image.png' name="Next/React Component Library" tools={["Next", "TypeScript", "CSS"]} span="4" gitLink='https://github.com/tonyqiu123/50-days-of-components' url='https://50-days-of-components.vercel.app/accordion' />

        <HomeGrid bgImg='https://cdn.discordapp.com/attachments/715319623637270638/1153801400304803912/image.png' name="Modern Job Portal" tools={["React", "Node", "MongoDB", "CSS"]} span="4" gitLink='https://github.com/tonyqiu123/company-job-portal' url='https://company-job-portal.netlify.app/demo' figmaLink='https://www.figma.com/file/mk4LqpyZw00jnbUyKX3FZR/Company-Job-Portal?node-id=0%3A1&t=dEgCxOKD9R4leCxV-1' />

        <HomeGrid bgImg={brightbearsinfo} name="BrightBearsInfo" tools={["HTML", "CSS", "JavaScript"]} span="4" gitLink='' url='https://brightbearsinfo.vercel.app/index' figmaLink='https://www.figma.com/file/CkkDvDIjMz5zNx7dsbXJOx/BrightBearsInfo?node-id=0-1&t=rXzuYUu0BHHqkOr9-0' />

        <HomeGrid bgImg={friendaccounting} name="Friend Accounting" tools={["HTML", "CSS", "JavaScript"]} span="4" gitLink="https://github.com/tonyqiu123/friend-accounting" url='https://friendaccounting.com/en/index' />

        <HomeGrid bgImg={tonyswebdesigns} name="Tony's Web Designs" tools={["HTML", "CSS", "JavaScript"]} span="4" gitLink="https://github.com/tonyqiu123/tonys-web-designs.ca" url='https://tonyswebdesigns.ca/' />


      </div>
    </AnimatedPage>
  );
}