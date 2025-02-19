import img1 from '../../../public/signup_page.PNG'
import img2 from '../../../public/chat.PNG'
import img3 from '../../../public/login.PNG'
const Chat_project = () => {
  return (
   <>
    <div className='text-black md:max-w-4xl px-5 max-w-2xl py-10 space-y-3 flex flex-col justify-center m-auto text-left'>
    <h1 className='font-bold text-3xl'>Real-Time Chat Application ( MERN )</h1>
    <p className='text-xs text-gray-700'>2 minute read</p>
    <p className='text-slate-800 text-sm md:text-[17px]'>Developed a feature-rich real-time chat application 
  enabling users send/receive instant messages.
The app ensures seamless communication through a responsive and user-friendly with modern styling
interface.
User Authentication: Implemented secure login and registration using JWT authentication with cookies.</p>

<div className='flex justify-evenly mt-10'>
  <div>
  <h1 className='font-bold text-lg'>Type</h1>
  <ul className='text-[13px] my-2'>
  <li>Financial services</li>
  </ul>
  </div>

  <div>
    <h1  className='font-bold text-lg'>Stack</h1>
  <ul  className='text-[13px] my-2' >
    <li>Javascript</li>
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Express.js</li>
    <li>Socket.io</li>
    <li>TailwindCSS</li>
    <li>DaisyUI</li>
    <li>Redux</li>
  </ul>
  </div>

  <div>
    <h1 className='font-bold text-lg'>Code</h1>
    <ul className=' my-1'>
      <li><a className='text-[#ed6955] font-bold text-xs' href="https://github.com/Billi007/MERN-Chat-App">Github</a></li>
    </ul>
  </div>

  <div>
  <h2  className='font-bold text-lg'>Live</h2>
   <ul  className='text-[15px] my-2'>
    <li className='text-[#f6654f] font-bold cursor-pointer text-xs'>Site</li>
   </ul>
  </div>
</div>
<div className='flex flex-col gap-10 my-10'>
   <img 
   className='w-3xl'
      src={img1}
      alt="" />
      <img 
       className='w-3xl '
      src={img2}
      alt="" />
  <img 
  className='w-3xl'
  src={img3}
  alt="img" />
</div>

  <div className='text-slate-800 text-[14px] md:text-[14.7px] pb-10 space-y-5'>
  <h1 className='font-bold text-2xl'>Web Stack and Explanation</h1>
  <ol className='text-sm'>
 <h1 className='font-bold py-2'>Technologies Used</h1>
    <li><span className='font-extrabold'>Frontend: </span>React.js, Tailwind CSS, Daisy UI</li>
    <li><span className='font-extrabold'>Backend:  </span>Node.js, Express.js</li>
    <li><span className='font-extrabold'>Database: </span>MongoDB</li>
    <li><span className='font-extrabold'>Real-Time Communication: </span>Socket.IO</li>
  </ol>


<h1 className='font-bold text-lg'>Project Description</h1>
<p>Built a fully functional real-time chat application that allows users to communicate instantly.
   The app features a responsive and <span className='font-bold'>modern UI</span> powered by <span className='font-bold'> Tailwind CSS and Daisy UI</span>, ensuring a seamless 
   experience across devices. Real-time messaging is enabled using <span className='font-bold'>Socket.IO</span>, providing instant message delivery and updates.</p>

<h1 className='font-bold text-lg'>Key Features</h1>
<ol className='text-sm'>
  <li><span className='font-extrabold'>Real-Time Messaging: </span>Instant message delivery and updates using Socket.IO.</li>
  <li><span className='font-extrabold'>Responsive Design: </span>A clean and modern UI built with Tailwind CSS and Daisy UI.</li>
  <li><span className='font-extrabold'>User Authentication: </span>Secure user authentication and authorization.</li>
  <li><span className='font-extrabold'>Database Integration: </span>Messages and user data are stored and managed using MongoDB.</li>
  <li><span className='font-extrabold'>Scalable Backend: </span>Built with Node.js and Express.js for efficient handling of real-time data.</li>
</ol>
 

<h1 className='font-bold text-lg'>What I Learned</h1>
<ul>
  <li>Gained hands-on experience with real-time communication using Socket.IO.</li>
  <li>Improved my skills in building responsive UIs with Tailwind CSS and Daisy UI.</li>
  <li>Enhanced my understanding of full-stack development with the MERN stack</li>
</ul>

</div>
    </div>
   </>
  )
}
{/* Deployment: Mention how you deployed the app (e.g., Vercel, Netlify, Render, etc.). */}

export default Chat_project