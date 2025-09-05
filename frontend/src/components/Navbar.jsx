import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[100px] flex justify-between items-center '>
        <img src='src/assets/logo.png' className='w-[79px] h-[79px] flex-shrink-0 aspect-square'></img>
        <ul className=' text-white font-arial text-[14px] not-italic font-bold leading-normal uppercase cursor-pointer flex gap-[100px]'> 
        <li><a href='#home' className='hover:text-[#03DCE0]'>Home</a></li>
        <li><a href='#about' className='hover:text-[#03DCE0]'>About</a></li>
        <li><a href='#services' className='hover:text-[#03DCE0]'>Services</a></li>
        <li><a href='#features' className='hover:text-[#03DCE0]'>Features</a></li>
        <li><a href='#contact' className='hover:text-[#03DCE0]'>Contact</a></li>
        </ul>
        <button className="flex w-[165px] h-[46px] px-[17px] py-[13px] pl-[19px] justify-center items-center flex-shrink-0 rounded-[5px] bg-[#03DCE0] cursor-pointer mt-4 
          transition duration-300 ease-in-out hover:shadow-[0_0_20px_#03DCE0]">
          Schedule Service
        </button>

    </div>
  )
}

export default Navbar