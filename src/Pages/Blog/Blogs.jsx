import React from 'react';

const Blogs = () => {
    // const Blogs = BlogsData
    return (
        <article className='w-[60%] pt-[94px] pb-[65px]'>
            <section className='w-full pb-[52px] grid place-content-center'>
                <h2 className='text-3xl font-bold uppercase'>Our Blog</h2>
            </section>

            <section className='w-full h-fit flex max-sm:block max-sm:space-y-8'>
                <article className='w-full h-[455px] px-4 pb-8 bg-zinc-600'>
                    <div className='w-full h-[275px] bg-amber-50'><img className='w-full h-full' src="" alt="" /></div>
                    <div>
                        {/* <Link className='w-full text-lg hover:text-[#e65540] transition-colors duration-300'> */}
                            <h4></h4>
                        {/* </Link> */}
                        <p></p>
                        <p></p>
                    </div>
                </article>
            </section>
        </article>
    );
};

export default Blogs;