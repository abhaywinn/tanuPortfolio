import img from '../../public/taishkapf.jpg'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>
    <div className='bg-white'>
    <h1 className='relative text-3xl  p-8 right-[29%] text-black font-extrabold'>My Skills</h1>
       <div className='flex flex-col md:flex-row gap-16 justify-center items-center py-10'>

       <div>
        <img 
        className='rounded-xl w-[200px] object-cover'
        src={img} 
        alt="profile" />
       </div>


       <div className='flex flex-wrap gap-1 md:w-xl text-white w-lg px-16 md:px-0'>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27] '>Javascript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Typescript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>React</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Next.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>Node.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>MongoDB</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Firebase</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Git & Github</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>TailwindCSS</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>HTML</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>CSS</button>

          <div className=' text-slate-800 mt-5 space-y-3 flex flex-col items-start'>
          <h1 className='font-bold'>I love building stuff 📱</h1>
          <p className='text-left text-sm md:text-[16px] leading-6'>Hey! I’m a frontend developer who loves turning ideas into reality. My tech journey began at 21,
         and since then, I love building apps, love photography, cooking (food is my other passion), 
         exploring new places, or diving into creative hobbies.I thrive on solving problems, learning new tech, 
         and making things that matter. Coding with a cup of coffee is my greatest hobby ☕💻</p>

         <Link 
         to='/about'
         className='text-[#e94026] font-semibold hover:opacity-90'>
         Keep reading my bio
         </Link>
          </div>

           </div>
    </div>
    </div>
    </>
  )
}

export default Skills