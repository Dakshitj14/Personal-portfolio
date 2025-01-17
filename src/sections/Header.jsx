import React, { useState, useEffect } from 'react'; 
import { Link } from "react-scroll";
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { SiPioneerdj } from "react-icons/si";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    const menuLink = [
        { name: 'Home', to: 'hero' },
        // { name: 'About', to: 'about' },
        { name: 'Tech-Stack', to: 'tech' },
        { name: 'Projects', to: 'projects' },
        { name: 'Collaborate', to: 'Collborate' },
        { name: 'Contact', to: 'contact' },
    ];

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [menuOpen]); 

    return (
        <header className='bg-themeblack py-4 lg:px-[100px] px-8 fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-themered font-bold text-left text-4xl'>
                    <span><SiPioneerdj />
                    </span>
                </div>
                <button className='text-white text-2xl md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoCloseSharp /> : <FaBars />}
                </button>

                <nav className='hidden md:block'>
                    <ul className=' flex space-x-10 text-lg font-poppins text-white'>
                        {menuLink.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    // spy={true}
                                    smooth={true}
                                    // offset={-100}
                                    duration={500}
                                    className={`cursor-pointer ${Link.name ==='Home' ? 'text-themered' : 'hover:text-themered transition-colors'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`fixed top-0 left-0 h-full w-full bg-black text-white transform ${menuOpen ? 'translate-x-0': 'translate-x-full' } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-hidden`}>
                    <IoCloseSharp className='fixed top-3 right-6 text-3xl cursor-pointer' onClick={() => setMenuOpen(false)} />

                    <ul className='flex flex-col space-y-6 text-2xl text-center'>
                        {menuLink.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    // spy={true}
                                    smooth={true}
                                    // offset={-100}
                                    duration={500}
                                    className={`cursor-pointer ${Link.name ==='Home' ? 'text-themered' : 'hover:text-themered transition-colors font poppins'}`} onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
