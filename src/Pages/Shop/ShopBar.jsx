import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const ShopBar = () => {
    return (
        <section className='flex flex-col gap-8 max-sm:items-center max-sm:flex-col-reverse'>
            <section className='flex flex-col gap-8 max-sm:w-4/5 max-sm:flex-row max-sm:justify-around'>
                <div className='flex flex-col gap-8'>
                    <div className='space-y-3 mb-4'>
                        <h4 className='text-[#333] text-lg font-extrabold'>Categories</h4>
                        <div className='w-full flex flex-col'>
                            <Link className='w-fit hover:text-[#e65540] transition-colors duration-300'>Best Seller (8 items)</Link>
                            <Link className='w-fit hover:text-[#e65540] transition-colors duration-300'>Featured (8 items)</Link>
                            <Link className='w-fit hover:text-[#e65540] transition-colors duration-300'>Men (8 items)</Link>
                            <Link className='w-fit hover:text-[#e65540] transition-colors duration-300'>Women (8 items)</Link>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h4 className='text-[#333] text-lg font-extrabold'>color</h4>
                        <div className='w-full flex flex-col'>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />black</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />gray</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />red</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 max-sm:justify-between'>
                    <div className='space-y-3'>
                        <h4 className='text-[#333] text-lg font-extrabold'>price</h4>
                        <div className='w-full flex flex-col'>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />0-20</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />20-40</span>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h4 className='text-[#333] text-lg font-extrabold'>size</h4>
                        <div className='w-full flex flex-col'>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />L</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />M</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />S</span>
                            <span className='w-full flex gap-3 hover:text-[#e65540] transition-colors duration-300'><input type="checkbox" />XL</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full flex justify-center text-[#555555] text-sm relative max-sm:w-9/12'>
                <input type="search" className='w-full h-full px-6 py-5 border-1 focus:outline-none border-[#c9c9c9]' placeholder='Search..' />
                <BiSearch className='text-black absolute top-[25px] right-5' />
            </div>
        </section>
    );
};

export default ShopBar;