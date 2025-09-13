import React from 'react'

const branches = () => {

  return (
    <div className='w-full flex flex-col items-center gap-4 py-[100px] px-4' style={{background: 'linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 100%)'}}>
        <span className="text-black font-arial text-center text-[14px] font-bold leading-normal tracking-[2.66px] capitalize">
              We’re Here
        </span>

        <h2 className="text-[#2A2A2A] text-center font-arial text-[36px] font-bold leading-normal capitalize">
            We’d Love to Meet You Here
        </h2>


    <div className='flex gap-20 mt-10'>
    <div className="w-[400px] h-[400px]">
        <h1 className='text-black font-arial text-[25px] font-bold capitalize'>Pali</h1>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d603336.0378545296!2d73.218493!3d18.54376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8117e3b7f54b7%3A0xaf461deeedf8869d!2sSHREE%20PEST%20CONTROL%20SERVICES!5e1!3m2!1sen!2sus!4v1757790615515!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg mt-4"
            
        ></iframe>
    </div>
    <div className='w-[400px] h-[400px]'>
        <h1 className='text-black font-arial text-[25px] font-bold capitalize'>Pen</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d602318.09032531!2d74.456283!3d18.829815!3m2!1i1024!2i768!4f13.1!2m1!1sShree%20Pest%20Control%20Near%20bharat%20gas%20pen%20Near%20pen%20st%20stand%20Shree%20yash%20plaza%2C%20Pen%2C%20Maharashtra%20402107!5e1!3m2!1sen!2sus!4v1757791180436!5m2!1sen!2sus" 
        width="100%"
         height="100%" 
         style={{border:0}} 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"
         className="rounded-lg shadow-lg mt-4"></iframe>

    </div>
    <div className='w-[400px] h-[400px]'>
        <h1 className='text-black font-arial text-[25px] font-bold capitalize'>Panvel</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d601766.4745805784!2d73.100142!3d18.983089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9b96b208d31%3A0x22d50aeb04edac6b!2sSirvi%20Park%20%2C%20Sector%202a%2C%20Karanjade!5e1!3m2!1sen!2sus!4v1757791362825!5m2!1sen!2sus"
         width="100%" 
         height="100%"
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className='rounded-lg shadow-lg mt-4'></iframe>
    </div>
    </div>
    </div>
  )
}

export default branches