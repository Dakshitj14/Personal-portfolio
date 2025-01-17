import React, { useEffect } from 'react' 
import { MdOutlineDesignServices } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPug } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { GiShieldBash } from "react-icons/gi";
import { TbBrandThreejs } from "react-icons/tb";






const Tech =()=>{
     useEffect(()=>{
        AOS.init({
            duration: 800,
            delay:200,
            once: false,

        })
    }, [])

    return(
        <div id= 'tech' className='w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px] '>
            <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
            <h1 data-aos='zoom-in' className='text-4xl uppercase text-white font-poppins font-semibold'>Tech-&-Tool</h1>
            <div data-aos='zoom-in' className='bg-themered h-[3px] w-[234px]'></div>
            <p data-aos='zoom in' data-aos-delay='400' className='text-gray-300 text-lg font-poppins'>Here is my technology and modern tools stack, showcasing the programming languages, frameworks, and tools I've explored to build innovative and efficient solutions.</p>
            </div>
            <div className='lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12'>
                {/* front-end */}
                <div data-aos = 'zoom in' className='flex flex-col justify-center items-start gap-6'>
                    <div className='bg-themered rounded-lg p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                         <MdOutlineDesignServices className='fill-white size-9' />   
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <h1 className='text-white font-semibold text-[26px] '>Frontend</h1>
                        <div className='text-gray-500 text-lg font-poppins grid grid-cols-3 gap-6'>
  <span className='text-5xl flex justify-center'><FaHtml5 /></span>
  <span className='text-5xl flex justify-center'><FaCss3Alt /></span>
  <span className='text-5xl flex justify-center'><FaHtml5 /></span>
  <span className='text-5xl flex justify-center'><RiNextjsFill /></span>
  <span className='text-5xl flex justify-center'><RiTailwindCssFill /></span>
  <span className='text-5xl flex justify-center'><SiReactquery /></span>
</div>

                    </div>

                </div>
                {/* back-end */}
                <div data-aos = 'zoom in' className='flex flex-col justify-center items-start gap-6'>
                    <div className='bg-themered rounded-lg p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                         <MdOutlineDesignServices className='fill-white size-9' />   
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <h1 className='text-white font-semibold text-[26px] '>Backend</h1>
                        <div className='text-gray-500 text-lg font-poppins grid grid-cols-3 gap-6'>
  <span className='text-5xl flex justify-center'><FaNodeJs />
  </span>
  <span className='text-5xl flex justify-center'><SiPug />
  </span>
  <span className='text-5xl flex justify-center'><SiMongodb />
  </span>
  <span className='text-5xl flex justify-center'><SiPostman /></span>
  <span className='text-5xl flex justify-center'><SiExpress /></span>
</div>

                    </div>

                </div>
                    {/* misc */}
                <div data-aos = 'zoom in' className='flex flex-col justify-center items-start gap-6'>
                    <div className='bg-themered rounded-lg p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                         <MdOutlineDesignServices className='fill-white size-9' />   
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <h1 className='text-white font-semibold text-[26px] '>Misc.</h1>
                        <div className='text-gray-500 text-lg font-poppins grid grid-cols-3 gap-6'>
  <span className='text-5xl flex justify-center'><FaGitAlt /></span>
  <span className='text-5xl flex justify-center'><FaPython /></span>
  <span className='text-5xl flex justify-center'><SiGnubash /></span>
  <span className='text-5xl flex justify-center'><GiShieldBash /></span>
  <span className='text-5xl flex justify-center'><TbBrandThreejs /></span>
</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tech