import React, { useEffect } from 'react'
import DJ from '../assets/DJ.png';
// import design from '../assets/design.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero =()=>{
    useEffect(()=>{
        AOS.init({
            duration: 800,
            delay:200,
            once: false,

        })
    }, []) ;


    return(
        <div id= 'hero' className='w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]'>
            <div className='lg: w-3/5 w-full flex flex-col justify-center items-start gap-8'>
                <h1 data-aos='zoom-in' className='text-themered lg: text-3xl text-xl font-semibold font-poppins'>Hi, I'm Dakshit Jha</h1>

                <h1 data-aos='zoom-in' data-aos-delay = '200' className='text-white text-5xl font-semibold font-poppins'>Full-stack developer</h1>

                <p data-aos='zoom-in' data-aos-delay = '400'  className='text-gray-200 lg:text-xl text-lg font-poppins'>"Full-stack developer with a knack for turning coffee into code. I build websites that work, apps that rock, and occasionally break things—just to fix them better. Let’s build something awesome!"</p>

                <a 
  href="https://www.google.com/"
  target="_blank" 
  rel="noopener noreferrer"
>
  <button 
    data-aos="zoom-in" 
    data-aos-delay="600"  
    className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg mt-5 font-poppins"
  >
    Resume
  </button>
</a>
            </div>


            <div data-aos='zoom-in' data-aos-delay = '600'  className='lg:w-2/5 w-full relative'>

            <img src={DJ} alt="hero image" className='lg:w-auto w-full lg:h-auto object-contain rounded-lg relative z-20 drop-shadow-2xl ' />
            
            </div>
        </div>
    )
}

export default Hero