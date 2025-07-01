import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';

const Sosials = () => {
    return (
        <div className='flex items-center gap-x-4.5 text-[19px] '>
                <FaFacebookF className='hover:text-[#e65540]  transition-colors duration-300' />
                <FaTwitter className='hover:text-[#e65540]  transition-colors duration-300' />
                <FaPinterestSquare className='hover:text-[#e65540]  transition-colors duration-300' />
                <FaGooglePlusG className='text-[23px] hover:text-[#e65540]  transition-colors duration-300' />
                <FaInstagram className='hover:text-[#e65540]  transition-colors duration-300' />
            </div>
    );
};

export default Sosials;