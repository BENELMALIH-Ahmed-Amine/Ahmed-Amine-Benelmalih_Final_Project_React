import React from 'react';
import Sosials from './Sosials';

const Footer = () => {
    return (
        <footer className='w-full pb-11 pt-15 mt-5 bg-[#f0f0f0] flex flex-col items-center text-[#737373] text-[14px]'>
            <section className=' w-full pb-38 px-13 space-x-37 min-sm:flex'>
                <article className='w-[470px] flex flex-col gap-10'>
                    <h4 className='text-black text-sm font-extrabold'>GET IN THOUCH</h4>
                    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879 </p>
                    <Sosials />
                </article>

                <section className='flex gap-40'>
                    <article className='space-y-10'>
                        <h4 className='text-black text-sm font-extrabold'>CATEGORIES</h4>
                        <ul className='space-y-3'>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Dresses</li>
                            <li>Sunglasses</li>
                        </ul>
                    </article>
                    <article className='space-y-10'>
                        <h4 className='text-black text-sm font-extrabold'>LINKS</h4>
                        <ul className='space-y-3'>
                            <li>Search</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Returns</li>
                        </ul>
                    </article>
                    <article className='space-y-10'>
                        <h4 className='text-black text-sm font-extrabold'>HELP</h4>
                        <ul className='space-y-3'>
                            <li>Track Order</li>
                            <li>Returns</li>
                            <li>Shipping</li>
                            <li>FAQs</li>
                        </ul>
                    </article>
                </section>

                <article className='space-y-10 flex flex-col'>
                    <h4 className='text-black text-sm font-extrabold'>NEWSLETTER</h4>
                    <input type="text"  placeholder='Email Address' className='w-[300px] pb-1 border-b-1 border-b-[#888888] focus:border-b-[#e65540]'/>
                    <button className='w-fit px-10 py-3 bg-black rounded-4xl text-white hover:bg-[#e65540]'>SHOP NOW</button>
                </article>
            </section>

            <p>Copyright © 2022 <a className='text-[14px] text-[#727272]' href="#">Shopify Theme Developed by MassTechnologist</a> All rights reserved.</p>
        </footer>
    );
};

export default Footer;