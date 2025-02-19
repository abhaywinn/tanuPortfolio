import Skills from './Skills'
import Projects from './project/Projects'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Contact from './Contact';
const Home = () => {
  return (
   <>

   <div className='max-w-full flex flex-col justify-center items-center py-48 bg-[#121e27]'>
   
     <div className='text-4xl md:text-[3.5rem] font-normal text-left leading-14 md:leading-20 tracking-normal md:tracking-wide'> Hi, I’m Tanishka | <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-3xl md:text-5xl font-black'>Software</span>
      <br /> 
      <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-3xl md:text-5xl font-black'> Engineer</span>
 
    <div className='text-[#ed6955] flex gap-3 text-2xl md:text-3xl my-10 cursor-pointer'>
      <a href='https://github.com/Billi007' className='hover:text-gray-400'><FaGithub /></a>
     <a href='https://www.linkedin.com/feed' className='hover:text-gray-400'> <FaLinkedin /></a>
     <a href='https://x.com/Tanisha1175' className='hover:text-gray-400'> <FaTwitter /></a>
     <a href='mailto:guptatanishka2008@gmail.com' className='hover:text-gray-400'> <MdEmail /></a>
     </div>
    <p className='text-sm md:text-lg max-w-sm text-left font-thin  tracking-normal'>I love exploring and creating 🚀 I’m a lifelong learner 🎓 and a good cook 🍕
  </p>
      </div>


    </div>
      <Skills/>
     <Projects/>
     <Contact/>
   </>
  )
}

export default Home