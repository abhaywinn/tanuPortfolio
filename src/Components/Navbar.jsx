import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
 const [openNav, setOprnNav] = useState(false);

  const toggleNav = () => {
    setOprnNav(!openNav);
  }


  return (
    <>
    <nav className='bg-[#0f1b24] sticky top-0 shadow-sm shadow-slate-800 z-50'>
    <div >
      <div className='name md:text-lg py-4 md:py-1'>Tanishka Gupta</div>
      
       <div>
      
          <button className="absolute right-10 cursor-pointer py-4 text-white md:hidden top-1 text-lg hover:text-gray-300" onClick={toggleNav}><RxHamburgerMenu /></button>
           {openNav ? (
            <>
           <div className="w-full h-48 md:h-11 text-white">
           <ul  className='absolute left-[50%] md:static space-y-3 text-sm py-2 top-16 md:w-full md:flex md:py-1 md:items-center md:justify-evenly'>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/">home</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/about">about</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/project">project</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/contact">contact</a></li>
        </ul> 
           </div>
           </>) : (<> 
            <div className="w-full h-48 md:h-11 md:block hidden text-white">
           <ul  className='absolute left-[50%] md:static space-y-3 text-sm py-2 top-16 md:w-full md:flex md:py-1 md:items-center md:justify-evenly'>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/">home</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/about">about</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/project">project</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/contact">contact</a></li>
        </ul> 
           </div>
           </>)}

       </div>
    </div>
      </nav>

    </>
  )
}

export default Navbar