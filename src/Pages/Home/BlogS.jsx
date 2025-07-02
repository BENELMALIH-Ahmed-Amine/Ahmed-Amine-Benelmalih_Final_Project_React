import React from 'react';
import BlogsData from '../../JSON/BlogsData.json'
import Images from '../../Constants/Images'
import { Link } from 'react-router-dom';

const BlogS = () => {
    const Blogs = BlogsData.blogs
    console.log(Blogs);

    return (
        <article className='w-[60%] pt-[94px] pb-[65px]'>
            <section className='w-full pb-[52px] grid place-content-center'>
                <h2 className='text-3xl font-bold uppercase'>Our Blog</h2>
            </section>

            <section className='w-full h-fit flex max-sm:block max-sm:space-y-8'>
                {
                    Blogs.map((b) =>
                        <Link to={`/blog/${b.id}`}>
                            <article className='w-full h-[455px] px-4 pb-8 text-[#888888]'>
                                <div className='w-full h-[275px] bg-amber-50'><img className='w-full h-full' src={Images[b.img]} alt="" /></div>
                                <div className='pt-3.5 space-y-3'>
                                    <Link to={`/blog/${b.id}`} className='w-full text-lg font-semibold text-[#333333] hover:text-[#e65540] transition-colors duration-300'>
                                        <h4>{b.title}</h4>
                                    </Link>
                                    <p className='text-[13px] mt-3  text-[#555555]'>by <span className='text-[#999999]'>{b.author}</span> on <span className='text-[#999999]'>{b.time}</span></p>
                                    <p>{b.des}</p>
                                </div>
                            </article>
                        </Link>
                    )
                }
            </section>
        </article>
    );
};

export default BlogS;