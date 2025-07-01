import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from '../../Constants/Images';

import Slider from "react-slick";


const CaroucelMulti = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        Speed: 2000
    };

    return (
        <article className='w-[60%] pt-[45px] pb-[105px]'>
            <section className='w-full pb-[60px] grid place-content-center'>
                <h2 className='text-3xl font-bold'>FEATURED PRODUCTS</h2>
            </section>

            <section className='bg-amber-100 slider-container'>
                <Slider {...settings}>
                    <article className='w-[288px] px-[15px] bg-amber-600 relative'>
                        <div className='w-full h-[360px] bg-amber-50'><img src="" alt="" /></div>

                        {/* Motion */}
                        <div className='w-full h-[360px] bg-[#00000070] absolute top-0'>
                            <button className='px-10 py-2.5 text-white bg-black rounded-4xl hover:bg-[#e65540]'>SHOP NOW</button>
                        </div>

                        <div className='w-full h-[70px] bg-amber-300'>
                            <a className='w-full text-xl' href="#"></a>
                            <span className='w-full text-[16px]'></span>
                        </div>
                    </article>
                </Slider>
            </section>
        </article>
    );
};

export default CaroucelMulti;