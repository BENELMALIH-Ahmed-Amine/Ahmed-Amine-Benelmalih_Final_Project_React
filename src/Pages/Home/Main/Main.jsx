import React from 'react';
import CaroucelMulti from './CaroucelMulti';

const Main = () => {
    return (
        <main className='w-full flex flex-col items-center'>
            <article className='w-[60%] py-[40px] flex justify-between max-sm:w-[80%] max-sm:block'>
                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px]'></div>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px]'></div>
                </section>
                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px]'></div>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px]'></div>
                </section>
                <section className='w-[350px] space-y-12 max-sm:w-full max-sm:mb-12'>
                    <div className='w-full h-[480px] bg-amber-800 max-sm:h-[640px]'></div>
                    <div className='w-full h-[340px] bg-amber-800 max-sm:h-[455px]'></div>
                </section>
            </article>

            <CaroucelMulti/>

            <div className='w-full h-fit py-14 bg-[#f2f2f2] flex justify-center'>
                <article className='w-[60%] h-fit flex justify-center gap-8 max-sm:w-[80%] max-sm:block max-sm:space-y-8 bg-amber-600'>
                    <section className='w-[48.7%] h-[425px] max-sm:w-full bg-amber-300'></section>
                    <section className='w-[48.7%] h-[425px] max-sm:w-full bg-amber-300'></section>
                </article>
            </div>
            <article className='w-[60%]'></article>
            <article></article>
        </main>
    );
};

export default Main;