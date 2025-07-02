import React from 'react';
import CaroucelMulti from './CaroucelMulti';
import Images from '../../Constants/Images';
import BlogS from '../Blog/BlogS';

const Main = () => {
    return (
        <main className='w-full flex flex-col items-center'>
            <article className='w-[60%] py-[40px] flex justify-between max-sm:w-[80%] max-sm:block'>
                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px] relative'>
                        <img className='w-full h-full' src={Images.card1} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px] relative'>
                        <img className='w-full h-full' src={Images.card2} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                </section>

                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px] relative'>
                        <img className='w-full h-full' src={Images.card3} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px] relative'>
                        <img className='w-full h-full' src={Images.card4} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                </section>

                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px] relative'>
                        <img className='w-full h-full' src={Images.card5} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px] relative'>
                        <img className='w-full h-full' src={Images.card6} alt="" />
                        <button className='px-10 py-2.5 bg-white hover:text-white hover:bg-[#e65540] absolute bottom-5 left-23.5'>SHOP NOW</button>
                    </div>
                </section>
            </article>

            <CaroucelMulti />

            <div className='w-full h-fit py-14 bg-[#f2f2f2] flex justify-center'>
                <article className='w-[60%] h-fit flex justify-center gap-8 max-sm:w-[80%] max-sm:block max-sm:space-y-8'>
                    <section className='w-[48.7%] h-[425px] max-sm:w-full relative'>
                        <div className='w-full h-full'><img className='w-full h-full' src={Images.banner1} alt="" /></div>
                        <div className='w-full h-full absolute top-0'>
                            <div className='w-full h-full Btext-white text-center grid place-content-center'>
                                <h3 className='text-3xl font-bold w-72 my-10'>The Beauty <span className='text-6xl'>Lookbook</span></h3>
                                <a className='text-xl hover:underline' href="#">View Collection</a>
                            </div>
                        </div>
                    </section>
                    <section className='w-[48.7%] h-[425px] flex justify-center text-[#737373] max-sm:w-full relative'>
                        <div className='w-full h-full'><img className='w-full h-full' src={Images.banner2} alt="" /></div>
                        <div className='text-center absolute bottom-0'>
                            <a className='w-full text-lg hover:text-[#e65540] transition-colors duration-300' href="#">Boxy4 T-Shirt with Roll Sleeve</a> <br />
                            <span className='w-full text-[16px]'>$20.00</span>
                            <section className='flex gap-5 mb-3 mt-10'>
                                <div className='size-16 border flex flex-col justify-center items-center'><span className='text-black text-base [16px]'>-2374</span>days</div>
                                <div className='size-16 border flex flex-col justify-center items-center'><span className='text-black text-base [16px]'>-16</span>hrs</div>
                                <div className='size-16 border flex flex-col justify-center items-center'><span className='text-black text-base [16px]'>-11</span>mints</div>
                                <div className='size-16 border flex flex-col justify-center items-center'><span className='text-black text-base [16px]'>-10</span>secs</div>
                            </section>
                        </div>
                    </section>
                </article>
            </div>

            <BlogS />

            <section className='w-full pt-5 pb-13 text-3xl text-[#222222] font-bold grid place-content-center'>
                <h3>@ FOLLOW US ON INSTAGRAM</h3>
            </section>

            <section className='w-full pt-15.5 pb-10 px-4 flex items-center text-[#888888]'>
                <div className='w-full py-4 flex flex-col items-center gap-1.5'>
                    <h4 className='text-lg font-semibold'>Free Delivery Worldwide</h4>
                    <span className='italic text-sm'>Mirum est notare quam littera gothica</span>
                </div>
                <div className='w-full py-4 flex flex-col items-center gap-1.5'>
                    <h4 className='text-lg font-semibold'>30 Days Return</h4>
                    <span className='italic text-sm'>Mirum est notare quam littera gothica</span>
                </div>
                <div className='w-full py-4 flex flex-col items-center gap-1.5'>
                    <h4 className='text-lg font-semibold'>Store Opening </h4>
                    <span className='italic text-sm'>Mirum est notare quam littera gothica</span>
                </div>
            </section>
        </main>
    );
};

export default Main;