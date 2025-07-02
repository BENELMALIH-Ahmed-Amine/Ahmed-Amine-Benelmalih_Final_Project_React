import React from 'react';
import Images from '../Constants/Images'
import { Link } from 'react-router-dom';

const Collections = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <main className='w-3/5 flex flex-wrap justify-center gap-x-8.5 gap-y-10 text-[#888888]'>
                <Link to={'/shop'} className='flex flex-col items-center'>
                    <div className='w-[360px] h-[490px] bg-amber-950'><img className='w-full h-full hover:scale-105' src="" alt="Best Seller" /></div>
                    <Link to={'/shop'} className='text-3xl hover:text-[#e65540] transition-colors duration-300'>Best Seller (8 items)</Link>
                </Link>
                <Link to={'/shop'} className='flex flex-col items-center'>
                    <div className='w-[360px] h-[490px] bg-amber-950'><img className='w-full h-full hover:scale-105' src={Images.blog3} alt="Featured"/></div>
                    <Link to={'/shop'} className='text-3xl hover:text-[#e65540] transition-colors duration-300'>Featured (8 items)</Link>
                </Link>
                <Link to={'/shop'} className='flex flex-col items-center'>
                    <div className='w-[360px] h-[490px] bg-amber-950'><img className='w-full h-full hover:scale-105' src={Images.card3} alt="Men"/></div>
                    <Link to={'/shop'} className='text-3xl hover:text-[#e65540] transition-colors duration-300'>Men (8 items)</Link>
                </Link>
                <Link to={'/shop'} className='flex flex-col items-center'>
                    <div className='w-[360px] h-[490px] bg-amber-950'><img className='w-full h-full hover:scale-105' src={Images.shop4} alt="Women"/></div>
                    <Link to={'/shop'} className='text-3xl hover:text-[#e65540] transition-colors duration-300'>Women (8 items)</Link>
                </Link>
            </main>
        </div>
    );
};

export default Collections;
