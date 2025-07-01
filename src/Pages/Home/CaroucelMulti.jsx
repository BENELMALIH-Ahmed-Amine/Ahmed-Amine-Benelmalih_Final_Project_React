import React, { useState } from 'react';
import Images from '../../Constants/Images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Products from '../../JSON/Products.json'

const CaroucelMulti = () => {
    const Product = Products.products
    console.log(Product);


    const [visible, setvisiblety] = useState(false)
    const Tvisible = () => {
        if (!visible) {
            setvisiblety("visible")
        }
    }
    const Fvisible = () => {
        if (visible) {
            setvisiblety("invisible")
        }
    }


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

            <section className='slider-container'>
                <Slider {...settings}>
                    {
                        Product.map((p) =>
                            <article onMouseEnter={Tvisible} onMouseLeave={Fvisible} className='w-[288px] px-[15px] relative'>
                                <div className='w-full h-[360px]'><img className='w-full h-full' src={Images[p.img]} alt="" /></div>

                                {/* Motion */}
                                <div className={`w-[260px] h-[360px] bg-[#00000080] absolute top-0 invisible ${visible}`}>
                                    <button className='px-10 py-2.5 text-white bg-black rounded-4xl hover:bg-[#e65540]'>SHOP NOW</button>
                                </div>

                                <div className='w-full h-[70px] text-[#737373]'>
                                    <a className='w-full text-lg' href="#">{p.name}</a> <br />
                                    <span className='w-full text-[16px]'>{p.price}</span>
                                </div>
                            </article>
                        )
                    }
                </Slider>
            </section>
        </article>
    );
};

export default CaroucelMulti;