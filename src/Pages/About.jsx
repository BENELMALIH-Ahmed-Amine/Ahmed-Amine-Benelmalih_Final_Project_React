import React from 'react';
import Images from '../Constants/Images';

const About = () => {
    return (
        <main className='w-full flex flex-col items-center'>
            <div className='w-full relative'>
                <img className='w-full h-full hover:scale-105' src={Images.about1} alt="" />
                <div className='w-full h-full bg-[#00000020] flex justify-center items-center text-white text-6xl font-bold uppercase absolute top-0'>About</div>
            </div>
            <article className='w-3/5 pt-16.5 pb-9.5 flex gap-7.5 max-sm:flex-col'>
                <section className='w-[360px] h-[440px]'><img className='w-full h-full hover:scale-105' src={Images.shop4} alt="" /></section>

                <section className='w-[730px] text-[15.5px] flex flex-col justify-center gap-8 text-[#888888] leading-6.5 max-sm:w-full'>
                    <div className='flex flex-col justify-center gap-5'>
                        <h2 className='text-2xl text-[#333333] '>Our story</h2>
                        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    </div>
                    <div className='pl-7.5 py-1 border-l-4 border-[#e6e6e6]'>
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <span className='text-[13px] text-[#555555]'>- Steve Job’s</span>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default About;