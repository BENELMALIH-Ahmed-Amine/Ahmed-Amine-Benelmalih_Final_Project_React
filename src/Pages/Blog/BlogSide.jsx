import React from 'react';
import Products from '../../JSON/Products.json'
import Images from '../../Constants/Images'
import { BiSearch } from 'react-icons/bi';

const BlogSide = () => {
    const Product = Products.products
    let ids =[0, 1, 2, 3, 4, 5, 6, 7]
    const SideProducts = []

    for (let i = 0; i < 5; i++) {
        let RandNum = Math.floor(Math.random() * ids.length)
        console.log(RandNum);
        
        let ProductShow = Product.find(e => e.id == RandNum)
        console.log(ProductShow);
        
        SideProducts.push(ProductShow)
        console.log(SideProducts);
        
        ids.splice(RandNum, 1)
        console.log(ids);
        
    }
    console.log(SideProducts);

    return (
        <section className='w-[270px] flex flex-col gap-15 text-[#888888]'>
            <div className='w-full flex justify-center text-[#555555] relative'>
                <input type="search" className='w-11/12 h-full px-5 py-3 border border-[#999990] rounded-4xl' placeholder='Search all articles...' />
                <BiSearch className='absolute top-[19px] right-7' />
            </div>
            <article className='flex flex-col gap-3'>
                <h4 className='text-[22px] font-black text-black mb-10'>Featured Products</h4>
                {
                    SideProducts.map((p) =>
                        <article className='w-full flex justify-between relative max-sm:w-[400px]'>
                            <div className='w-[150px] h-[150px]'><img className='w-full h-full' src={Images[p.img]} alt="" /></div>

                            <div className='w-[150px h-full hover:bg-[#ffffff71] absolute top-0 max-sm:w-full'></div>

                            <div className='w-fit h-[70px] ml-3 text-[#737373]'>
                                <a className='text-base hover:text-[#e65540] transition-colors duration-300' href="#">{p.name}</a> <br />
                                <span className='text-xs'>{p.price}</span>
                            </div>
                        </article>
                    )
                }
            </article>
            <section>
                <h4 className='text-[22px] font-black text-black mb-10'>Tags Cloud</h4>
                <div className='flex gap-5'>
                    <span className='border py-1 px-3.5 rounded-2xl'>crafts</span>
                    <span className='border py-1 px-3.5 rounded-2xl'>street style</span>
                </div>
            </section>
        </section>
    );
};

export default BlogSide;