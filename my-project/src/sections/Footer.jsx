import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
import { FaArrowUp } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";

// import { use } from 'react';



const Footer =()=>{
    useEffect(()=>{
        AOS.init({
            duration: 800,
            delay:200,
            once: false,
        }) 
    }, []);
    return(
        <div id='contact' className='bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5'>
            <h1 data-aos='zoom-in' className='uppercase text-white text-[25px] font-semibold font-poppins'>Get in touch with me</h1>
            <p
                data-aos="zoom-in"
                data-aos-delay="200"
                className="text-gray-300 text-[16px] text-center font-poppins leading-8"
>               
                Jhansi, Uttar-Pradesh, India{" "}
                <span className="inline-flex items-center">
                  <FaMapLocationDot />
                </span>
                <br />
                jhadakshit2004@gmail.com
                <br />
                +91 6388357829
            </p>
            <div
  id="socialicons"
  data-aos="zoom-in"
  data-aos-delay="400"
  className="w-full flex justify-center items-center gap-3 mt-6"
>
  <a
    href="https://www.linkedin.com/in/dakshitj14/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer"
  >
    <FaLinkedin className="fill-white size-6" />
  </a>
  <a
    href="https://www.instagram.com/dakshit_j14/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer"
  >
    <FaInstagram className="fill-white size-6" />
  </a>
  <a
    href="https://github.com/Dakshitj14"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer"
  >
    <FaGithub className="fill-white size-6" />
  </a>
  <a
    href="https://x.com/DakshitJha"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer"
  >
    <FaSquareXTwitter className="fill-white size-6" />
  </a>
</div>

            <p className='text-gray-300 text-center text-[15px] font-poppins leading-8'></p>

            <div id="icon-box" className='bg-themered text-white p-3 rounded-full hover:bg-black hover:text-themered cursor-pointer fixed bottom-7 right-7'>
        <Link to ="hero" spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className='size-6' />
                </Link>
            </div>

        </div> 
    )
}

export default Footer