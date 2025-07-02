import React, { Profiler, useState } from 'react';
import logo from '../assets/images/logo.png.webp'
import { Link } from 'react-router-dom';
import { IoLockClosedOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { CgChevronRight } from 'react-icons/cg';
import { FaX } from 'react-icons/fa6';
import { PiUserCircle } from 'react-icons/pi';

const Nav = () => {
    const [visible, setvisiblety] = useState("invisible")

    const visiblety = () => {
        setvisiblety("invisible")
        if (visible == "invisible") {
            setvisiblety("visible")
        }
    }
    const [navvisible, setnavvisiblety] = useState("hidden")
    const [barvisible, setbarvisiblety] = useState("")

    const Navvisibletys = () => {
        setnavvisiblety("")
        setbarvisiblety("hidden")
    }

    const Xvisibletys = () => {
        setnavvisiblety("hidden")
        setbarvisiblety("")
    }
    
    return (
        <div className='w-full py-7 pr-12 flex justify-between items-center text-[#888888] max-sm:px-5 max-sm:gap-x-34 max-sm:relative'>
            <div className='w-[165px] h-[25px] pl-14 max-sm:p-0 max-sm:w-[110px]'><img className='w-full h-full' src={logo} alt="Fashe." /></div>
            <nav className={`flex gap-x-7 text-[#555555] max-sm:flex-col max-sm:absolute top-20 left-0 max-sm:bg-[#e65540] max-sm:text-white max-sm:px-5 max-sm:w-full max-sm:${navvisible}`}>
                <div className='flex items-center justify-between'>
                    <Link to={'/'} className='w-fit hover:underline max-sm:py-3'>Home </Link>
                    <CgChevronRight className='text-[13px] min-sm:hidden' />
                </div>
                <Link to={'/shop'} className='w-fit hover:underline max-sm:py-3'>Shop</Link>
                <Link to={'/sale'} className='w-fit hover:underline max-sm:py-3'>Sale</Link>
                <Link to={'/features'} className='w-fit hover:underline max-sm:py-3'>Features</Link>
                <Link to={'/blog'} className='w-fit hover:underline max-sm:py-3'>Blog</Link>
                <Link to={'/about'} className='w-fit hover:underline max-sm:py-3'>About</Link>
                <Link to={'/contact'} className='w-fit hover:underline max-sm:py-3'>Contact</Link>
            </nav>
            <div className='flex items-center gap-x-10 text-3xl relative max-sm:gap-x-7'>
                <PiUserCircle className='text-4xl'/>

                <IoLockClosedOutline onClick={visiblety} />
                <div className={`w-[350px] bg-white px-12 py-5 border text-lg absolute top-13 right-0 z-10 ${visible}`}>
                    Your shopping cart is empty!
                </div>

                <FaBars onClick={Navvisibletys} className={`text-black min-sm:hidden max-sm:${barvisible}`}/>
                <FaX onClick={Xvisibletys} className={`text-black min-sm:hidden max-sm:${navvisible}`}/>
            </div>
        </div>
    );
};

export default Nav; 