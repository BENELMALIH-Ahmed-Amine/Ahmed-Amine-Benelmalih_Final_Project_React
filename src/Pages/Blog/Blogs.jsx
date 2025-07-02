import React from 'react';
import BlogsData from '../../JSON/BlogsData.json'
import Images from '../../Constants/Images'
import { useParams } from 'react-router-dom';

const Blogs = () => {
    const { id } = useParams()
    const Blogs = BlogsData.blogs

    const Artical = Blogs.find(e => e.id == id)
    return (
        <section className='w-[811px] pb-20'>
            <article className='w-full pb-6 text-[#888888]'>
                <div className='w-full'><img className='w-full h-full hover:scale-105' src={Images[Artical.img]} alt={Artical.title + "by" + Artical.author} /></div>

                <div className='w-full pt-8 flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-black text-2xl font-semibold'>{Artical.title}</h4>
                        <p className='text-sm'>
                            <span>by {Artical.author}</span>
                            <span className='border-l-1 pl-2 ml-2'>{Artical.time}</span>
                            <span className='border-l-1 pl-2 ml-2 space-x-[3px]'>{Artical.tag.map((t) => <span>{t}</span>)}</span>
                            <span className='border-l-1 pl-2 ml-2 font-light'>0 Comments</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-7'>
                        {
                            Artical.desctiption.map((d) =>
                                <p>{d}</p>
                            )
                        }
                    </div>
                </div>

                <div className='w-full pt-5'>
                    <div className='flex gap-5'>
                        {Artical.tag.map((t) => <span className='border py-1 px-3.5 rounded-2xl'>{t}</span>)}
                    </div>
                </div>
            </article>
            <article className='w-full text-sm text-[#888888] bg-white'>
                <h4 className='text-xl text-[#333333] font-bold uppercase'>Leave a comment</h4>

                <form className='mt-1.5 flex flex-col gap-5'>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    <section className='flex flex-col gap-5'>
                        <textarea className='w-full p-4.5 border' rows={6} placeholder='Message'></textarea>
                        <input type="text" className='w-72 p-4 border' placeholder='Your Name' />
                        <input type="text" className='w-72 p-4 border' placeholder='Email address' />
                        <button className='w-fit px-10 py-3 bg-black rounded-4xl text-white hover:bg-[#e65540] transition-colors duration-300 uppercase'>Post Comment</button>

                    </section>
                    <p>Please note, comments must be approved before they are published.</p>
                </form>
            </article>
        </section>
    );
};

export default Blogs;