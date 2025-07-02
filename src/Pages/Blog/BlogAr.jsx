import React from 'react';
import BlogSide from './BlogSide';
import Blogs from './Blogs';

const BlogAr = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[60%] mt-20 flex justify-between max-sm:flex-col'>
                <Blogs />
                <BlogSide />
            </div>
        </div>
    );
};

export default BlogAr;