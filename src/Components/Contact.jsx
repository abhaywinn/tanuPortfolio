import { GiCoffeeCup } from "react-icons/gi";

const Contact = () => {
  return (
    <>
    <div className='flex  justify-center items-center mx-6 gap-[8%] md:gap-[10%] py-[10%]'>

      <div className='space-y-6 text-left'>
      <h1 className='text-[2.5rem] md:text-[3.8rem]  text-[#121e27]'>Let's have a chat</h1>
      <p
      className='text-[#ff5c49] font-bold text-sm'>guptatanishka2008@gmail.com</p>
       {/* <button className=' text-xm py-2 cursor-pointer px-5 bg-[#f1543b] hover:bg-[#e74c3c] font-semibold'>
        <a href='guptatanishka2008@gmail.com'>
        Get in touch
        </a>
       </button> */}
       <button className="px-6 py-2 font-medium bg-[#e9614d] text-white w-fit transition-all duration-200
        shadow-[7px_7px_0px_black] border-2 border-black hover:bg-[#f1543b] cursor-pointer hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
       <a href="mailto:guptatanishka2008@gmail.com"> Get in touch</a>
      </button>
      </div>

       <div>
        <GiCoffeeCup className='text-7xl md:text-9xl text-[#f1543b] cursor-pointer animate-pulse' />
       </div>
    </div>
    </>
  )
}

export default Contact