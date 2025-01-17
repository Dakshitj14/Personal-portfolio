import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CgClipboard } from "react-icons/cg";
import { SiTestcafe } from "react-icons/si";

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    return (
        <div id='projects' className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-start gap-5'>
            <h1 data-aos='zoom-in' className='text-4xl uppercase text-white font-semibold font-poppins'>Projects</h1>
            <div data-aos='zoom-in' data-aos-delay='200' className='bg-themered h-[3px] w-[234px]'></div>
            <p data-aos='zoom-in' data-aos-delay='400' className='text-gray-300 text-center text-lg font-poppins lg:w-[70%] w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nostrum!
            </p>
            {/* project1 */}

            <div className='w-full flex lg:flex-row flex-col justify-center items-start lg:gap-20 gap-20'>
                {/* Project 1 */}
                <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Project 1</h1>
                        <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-500 text-[17px] font-poppins'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nostrum!
                        </p>
                    </div>
                    <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>
                        Production site <span><SiTestcafe /></span>
                    </button>
                    <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>
                        Source code <span><CgClipboard /></span>
                    </button>
                </div>

                {/* Project 1 Image */}
                <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
                    <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[40px]'></div>
                    <img src={project1} alt="Project 1" className='lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] object-cover rounded-lg relative' />
                </div>
            </div>

            {/* project2 */}
            <div className='w-full flex lg:flex-row-reverse flex-col justify-center items-start lg:gap-20 gap-20 mt-20'>
                {/* Project 2 */}
                <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 data-aos="zoom-in" data-aos-delay="600" className='text-white font-semibold text-[32px] leading-10'>Project 2</h1>
                        <p data-aos="zoom-in" data-aos-delay="800" className='text-gray-500 text-[17px] font-poppins'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nostrum!
                        </p>
                    </div>
                    <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>
                        Production site <span><SiTestcafe /></span>
                    </button>
                    <button data-aos="zoom-in" data-aos-delay="1000" className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>
                        Source code <span><CgClipboard /></span>
                    </button>
                </div>

                {/* Project 2 Image */}
                <div data-aos="zoom-in" data-aos-delay="1200" className='lg:w-[60%] w-full relative'>
                    <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] rounded-lg absolute top-[30px] -left-[40px]'></div>
                    <img src={project2} alt="Project 1" className='lg:w-[600px] w-[300px] lg:h-[420px] h-[200px] object-cover rounded-lg relative' />
                </div>
            </div>
        </div>
    );
};

export default Projects;
