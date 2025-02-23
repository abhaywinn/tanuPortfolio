import img1 from '../../../public/net1.PNG'
import img2 from '../../../public/net2.PNG'
import img3 from '../../../public/net3.PNG'


const Netflix_project = () => {
  return (
    <div className='text-black md:max-w-4xl px-5 max-w-2xl py-10 space-y-3 flex flex-col justify-center m-auto text-left'>
    <h1 className='font-bold text-3xl'>Netflix Clone app</h1>
    <p className='text-xs text-gray-700'>2 minute read</p>
    <p className='text-slate-800 text-sm md:text-[17px]'>This Netflix Clone is a fully responsive web application 
      that replicates Netflix's core functionalities. It provides a modern and sleek UI,
       allowing users to sign up, log in. Built using React and Redux, the app ensures smooth state management and dynamic UI updates.</p>

<div className='flex justify-evenly mt-10'>

  <div>
    <h1  className='font-bold text-lg'>Stack</h1>
  <ul  className='text-[13px] my-2' >
    <li>React.js</li>
    <li>Firebase</li>
    <li>TailwindCSS</li>
    <li>Redux</li>
  </ul>
  </div>

  <div>
    <h1 className='font-bold text-lg'>Code</h1>
    <ul className=' my-1'>
      <li><a className='text-[#ed6955] font-bold text-xs' href="https://github.com/Billi007/Netflix-app">Github</a></li>
    </ul>
  </div>
  
</div>
<div className='flex flex-col gap-10 my-10'>
   <img 
   className='w-3xl object-cover'
      src={img1}
      alt="" />
      <img 
       className='w-3xl h-[500px]  object-cover'
      src={img2} 
      alt="" />
  <img 
  className='w-3xl object-cover'
  src={img3}
  alt="img" />
</div>

<div className='text-slate-800 text-[14px] md:text-[14.7px] pb-10 space-y-5'>
  <h1 className='font-bold text-2xl'>Web Stack and Explanation</h1>
  <ol className='text-sm'>
 <h1 className='font-bold py-2'>Technologies Used</h1>
    <li><span className='font-extrabold'>Frontend: </span>React.js, Tailwind CSS</li>
    <li><span className='font-extrabold'>Database:  </span>Firebase</li>
    <li><span className='font-extrabold'>State-management: </span>Redux</li>
  </ol>


<h1 className='font-bold text-lg'>Project Description</h1>
<p>Developed a Netflix-inspired streaming platform core built with <span className='font-bold'>React</span> for the frontend,
       Firebase for authentication and database, <span className='font-bold'>TailwindCSS</span> for styling,
       and <span className='font-bold'>Redux</span> for state management. The app replicates core features 
       of Netflix, including user authentication, and a responsive UI.</p>

<h1 className='font-bold text-lg'>Key Features</h1>
<ol className='text-sm'>
  <li><span className='font-extrabold'> User Authentication: </span>Secure login and signup with Firebase Authentication.</li>
  <li><span className='font-extrabold'>Redux State Management: </span>Efficient handling of user sessions and UI states.</li>
  <li><span className='font-extrabold'>Responsive UI: </span> Fully optimized for all devices using Tailwind CSS.</li>
</ol>
 

<h1 className='font-bold text-lg'>What I Learned</h1>
<ul>
  <li>Gained hands-on experience with user Authentication using Firebase.</li>
  <li>Improved my skills in building responsive UIs with Tailwind CSS.</li>
  <li>Enhanced my understanding of Frontend development and Fetching API Calls</li>
</ul>

</div>
    </div>
  )
}

export default Netflix_project