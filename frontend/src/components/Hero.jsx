import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
<div className="relative w-full h-[761px] overflow-hidden rounded-b-[30px]">

    <div className="fixed top-0 left-0 w-screen h-[761px] bg-[url('src/assets/hero_section.png')] bg-cover bg-center bg-no-repeat blur-[3.7px] -z-10"></div>
    <div className="fixed top-0 left-0 w-screen h-[761px] rounded-b-[30px] bg-[linear-gradient(270deg,rgba(0,0,0,0.2)_0.12%,rgba(0,0,0,0.92)_100.45%)] -z-10"></div>
    {/* Navbar */}
    <div >
      <Navbar />
    </div>

    {/*Hero Section */}
    <div className='mt-[60px] flex justify-between items-start'>
      {/* Left Section */}
      <div className="max-w-[646px]">
        <p className='text-white font-arial text-[12px] not-italic font-normal leading-normal tracking-[5.76px] capitalize'>Shree Pest Control</p>
        <h2 className='w-[646px] h-fit flex-shrink-0 text-[#E2E9E9] font-arial text-[72.378px] not-italic font-bold leading-normal'>Expert Pest Solutions for Your Peace of Mind</h2>
        <p className='w-[449px] h-fit flex-shrink-0 text-white font-arial text-[14px] not-italic font-normal leading-normal tracking-[0.84px] mt-2 '>We safeguard your property from rodents, insects, and other pests using eco-friendly methods and experienced technicians. Trust Norats to keep your space clean and pest-free.</p>
        {/* <button className='flex w-[165px] h-[46px] px-[17px] py-[13px] pl-[19px] justify-center items-center flex-shrink-0 rounded-[5px] bg-[#03DCE0] cursor-pointer mt-4'>Schedule Service</button> */}
        <button className="flex w-[165px] h-[46px] px-[17px] py-[13px] pl-[19px] justify-center items-center flex-shrink-0 rounded-[5px] bg-[#03DCE0] cursor-pointer mt-4 -ml-[20px] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#03DCE0]">
          Schedule Service
        </button>

      </div>
      {/* Right Section */}
      <div>
        <img src='src/assets/hero2.png' className='w-[506px] h-[621px] flex-shrink-0 aspect-[22/27]'></img>
      </div>
    </div>


</div>



  )
}

export default Hero