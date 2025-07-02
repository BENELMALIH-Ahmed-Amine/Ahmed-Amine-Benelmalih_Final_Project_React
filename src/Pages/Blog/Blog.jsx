import React from 'react';
import BlogsData from '../../JSON/BlogsData.json'
import Images from '../../Constants/Images'
import BlogSide from './BlogSide';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const Blog = () => {
    const Blogs = BlogsData.blogs

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full relative'>
                <img className='w-full h-[240px]' src={Images.banner4} alt="" />
                <div className='w-full h-full bg-[#00000030] flex justify-center items-center text-white text-6xl font-bold uppercase absolute top-0'>News</div>
            </div>
            <div className='w-[60%] mt-20 flex justify-between max-sm:flex-col'>
                <div className='w-[811px] pb-20'>
                    {
                        Blogs.map((b, i) =>
                            <article key={i} className='w-full pb-20 text-[#888888]'>
                                <div className='w-full relative'>
                                    <img className='w-full h-full' src={Images[b.img]} alt={b.title + "by" + b.author} />

                                    <div className='w-fit bg-black text-white px-5 py-1.5 absolute left-0 bottom-10'>{b.time}</div>
                                </div>

                                <div className='w-full pt-8 flex flex-col gap-7'>
                                    <div className='flex flex-col gap-3'>
                                        <h4 className='text-black text-2xl font-semibold'>{b.title}</h4>
                                        <p className='text-sm'>
                                            <span>by {b.author}</span>
                                            <span className='border-l-1 pl-2 ml-2 space-x-[3px]'>{b.tag.map((t) => <span>{t}</span>)}</span>
                                            <span className='border-l-1 pl-2 ml-2 font-light'>0 Comments</span>
                                        </p>
                                    </div>
                                    <p>{b.des}</p>
                                </div>

                                <div className='w-full pt-2 text-black text-xm flex gap-2 items-center'>
                                    <p>Continue Reading</p><MdOutlineArrowRightAlt className='text-xl'/>
                                </div>
                            </article>
                        )
                    }
                </div>

                <BlogSide />
            </div>
        </div>
    );
};

export default Blog;