import React, { useRef, useState } from 'react';
import Images from '../../Constants/Images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Products from '../../JSON/Products.json'
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiChevronUp } from 'react-icons/bi';

const CaroucelMulti = () => {
    const Product = Products.products
    // console.log(Product);


    const [visible, setvisiblety] = useState("invisible")
    const Tvisible = () => {
        if (visible == "invisible") {
            setvisiblety("visible")
        }
    }
    const Fvisible = () => {
        if (visible) {
            setvisiblety("invisible")
        }
    }


    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        Speed: 2000,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    slidesToScroll: 2,
                    initialSlide: 2,
                    vertical: true,
                }
            }
        ]
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <article className='w-[60%] pt-[45px] pb-[105px] relative'>
            <section className='w-full pb-[60px] grid place-content-center'>
                <h2 className='text-3xl font-bold'>FEATURED PRODUCTS</h2>
            </section>

            <section className='slider-container max-sm:'>
                <Slider {...settings}>
                    {
                        Product.map((p, i) =>
                            <article key={i} onMouseEnter={Tvisible} onMouseLeave={Fvisible} className='w-[288px] px-[15px] relative max-sm:w-[400px]'>
                                <div className='w-full h-[360px]'><img className='w-full h-full' src={Images[p.img]} alt="" /></div>

                                {/* Motion */}
                                <div className={`w-[260px] h-[360px] bg-[#00000080] absolute top-0 invisible ${visible} max-sm:w-[92%]`}>
                                    <button className='px-10 py-2.5 text-white bg-black rounded-4xl hover:bg-[#e65540] uppercase absolute bottom-5 left-[37px] max-sm:left-[80px]'>Add to chart</button>
                                </div>

                                <div className='w-full h-[70px] mt-3 text-[#737373]'>
                                    <a className='w-full text-lg hover:text-[#e65540] transition-colors duration-300' href="#">{p.name}</a> <br />
                                    <span className='w-full text-[16px]'>{p.price}</span>
                                </div>
                            </article>
                        )
                    }
                </Slider>
                <div style={{ textAlign: "center" }} className='flex gap-2.5'>
                    <button className="button p-3 rounded-full text-[#999] text-6xl absolute top-72 -left-17 max-sm:hidden" onClick={previous}>
                        <BiChevronLeft />
                    </button>
                    <button className="button p-3 rounded-full text-[#999] text-6xl absolute top-72 -right-17 max-sm:hidden" onClick={next}>
                        <BiChevronRight />
                    </button>
                    <button className="button p-3 rounded-full text-[#999] text-6xl absolute bottom-5 left-35 min-sm:hidden" onClick={previous}>
                        <BiChevronUp />
                    </button>
                    <button className="button p-3 rounded-full text-[#999] text-6xl absolute bottom-0 left-35 min-sm:hidden" onClick={next}>
                        <BiChevronDown />
                    </button>
                </div>
            </section>
        </article>
    );
};

export default CaroucelMulti;