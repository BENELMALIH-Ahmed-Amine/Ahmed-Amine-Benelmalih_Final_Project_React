import React from 'react';

const CaroucelMulti = () => {
    return (
            <article className='w-[60%] pt-[45px] pb-[105px]'>
                <section className='w-full pb-[60px] grid place-content-center'>
                    <h2 className='text-3xl font-bold'>FEATURED PRODUCTS</h2>
                </section>

                <section className='w-full flex'>
                    <article className='w-[288px] px-[15px] bg-amber-600'>
                        <div className='w-full h-[360px] bg-amber-100'></div>
                        <div className='w-full h-[70px] bg-amber-300'>
                            <a className='w-full text-xl' href="#"></a>
                            <span className='w-full text-[16px]'></span>
                        </div>
                    </article>
                    
                    {/* 8 times */}
                </section>
            </article>
    );
};

export default CaroucelMulti;