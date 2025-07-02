import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { FiChevronsUp } from 'react-icons/fi';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const BackTT = () => {
    return (
        <a href='#' className='p-[11px] bg-[#00000085] hover:bg-[#e65540] transition-colors duration-300 fixed bottom-10 right-10'>
            <HiOutlineChevronDoubleUp className='text-white text-[17px] font-black'/>
        </a>
    );
};

export default BackTT;