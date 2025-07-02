import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../Constants/Images';

import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const HeroCaroucel = () => {
    const collections = useNavigate()

    let sliderRef = useRef(null);
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        // todo: buttons

        <article className='w-[100vw] h-[610px] slider-container relative'>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <section className='w-[100vw] h-[610px] relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel1} alt="" /></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold mb-10'>New arrivals</span>

                            <button onClick={() => collections('collections')} className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>

                <section className='w-[100vw] h-full relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel2} alt="" /></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold mb-10'>New arrivals</span>

                            <button onClick={() => collections('collections')} className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>

                <section className='w-[100vw] h-full relative'>
                    <div className='w-[100vw] h-full'><img className='w-full h-full' src={Images.carousel3} alt="" /></div>

                    <div className="w-full h-full bg-[#00000030] grid place-content-center absolute top-0">
                        <div className='flex flex-col items-center'>
                            <h1 className='text-xl text-white'>Women Collection 2018</h1>
                            <span className='text-[65px] text-white font-bold mb-10'>New arrivals</span>

                            <button onClick={() => collections('collections')} className='px-10 py-2.5 bg-white rounded-4xl hover:text-white hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>
                    </div>
                </section>
            </Slider>

            <div style={{ textAlign: "center" }} className='flex gap-2.5'>
                <button className="button bg-[#00000085] p-3 rounded-full text-white text-xl absolute top-70 left-10" onClick={previous}>
                    <BiChevronLeft/>
                </button>
                <button className="button bg-[#00000085] p-3 rounded-full text-white text-xl absolute top-70 right-10" onClick={next}>
                    <BiChevronRight/>
                </button>
            </div>
        </article>
    );
};

export default HeroCaroucel;