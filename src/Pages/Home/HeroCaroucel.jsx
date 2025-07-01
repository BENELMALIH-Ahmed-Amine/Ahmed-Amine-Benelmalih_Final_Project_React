import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../Constants/Images';

import Slider from "react-slick";

const HeroCaroucel = () => {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        // todo: buttons?!
        //? why does h doesn't respend
        
        <article className='w-[100vw] h-[610px] bg-amber-500 slider-container'>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <section className='w-[100vw] h-full relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel1} alt=""/></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold'>New arrivals</span>

                            <button className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>

                <section className='w-[100vw] h-full relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel2} alt=""/></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold'>New arrivals</span>

                            <button className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>

                <section className='w-[100vw] h-full relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel3} alt=""/></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold'>New arrivals</span>

                            <button className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>
            </Slider>
        </article>
    );
};

export default HeroCaroucel;