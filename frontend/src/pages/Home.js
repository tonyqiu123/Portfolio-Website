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
import linkedinProfile from '../images/homeProjectPhotos/linkedinProfile.jpg'

export default function Home() {

  return (
    <AnimatedPage>
      <div className='home'>

        <div className='grid homeIntro column' style={{ borderRadius: '32px', gridColumn: 'span 5', backgroundImage: 'linear-gradient(to left, #ffefba, #ffffff)', justifyContent: 'space-between' }}>
          <div className='column' style={{ maxWidth: '850px', padding: '0' }}>
            <h2 style={{ margin: '-16px 0 16px 0' }}>Hey, I'm Tony</h2>
            <p>Welcome to my full stack developer portfolio website! I've been coding websites from scratch for three years now, and I absolutely love coming up with new and innovative solutions that make the web a better place for everyone. Let me know what you think!</p>
          </div>
          <div className='row'>
            <a href="mailto: tqiu@uwaterloo.ca"><button><p style={{ color: 'white' }}>Contact me</p></button></a>
            <a target="_blank" href='https://github.com/tonyqiu123'><img src='https://cdn.discordapp.com/attachments/715319623637270638/1089321394019512474/Vector.png' /></a>
            <a target="_blank" href='https://www.linkedin.com/in/tonyqiu1/'><img src={linkedin} /></a>
            <a target="_blank" href='https://www.instagram.com/tony_q04/'><img src={instagram} /></a>
          </div>
        </div>


        <div className='grid column' style={{ gridColumn: 'span 7', padding: '0' }}>
          <div className='grid-ImgCover' style={{ backgroundImage: `url("${linkedinProfile}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>

        <HomeGrid bgImg={jobportal} name="Modern Job Portal" tools={["React", "Node", "MongoDB", "CSS"]} span="6" gitLink='https://github.com/tonyqiu123/Job-Portal' url='https://modernjobportal.netlify.app/' figmaLink='https://www.figma.com/file/mk4LqpyZw00jnbUyKX3FZR/Company-Job-Portal?node-id=0%3A1&t=dEgCxOKD9R4leCxV-1' />

        <HomeGrid bgImg={brightbearsinfo} name="BrightBearsInfo" tools={["HTML", "CSS", "JavaScript"]} span="6" gitLink='' url='https://brightbearsinfo.com' figmaLink='https://www.figma.com/file/CkkDvDIjMz5zNx7dsbXJOx/BrightBearsInfo?node-id=0-1&t=rXzuYUu0BHHqkOr9-0' />

        <HomeGrid bgImg={friendaccounting} name="Friend Accounting" tools={["HTML", "CSS", "JavaScript"]} span="6" gitLink="https://github.com/tonyqiu123/friend-accounting" url='https://friendaccounting.com/en/index' />

        <HomeGrid bgImg={tonyswebdesigns} name="Tony's Web Designs" tools={["HTML", "CSS", "JavaScript"]} span="6" gitLink="https://github.com/tonyqiu123/tonys-web-designs.ca" url='https://tonyswebdesigns.ca/' />


      </div>
    </AnimatedPage>
  );
}