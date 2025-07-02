import React, { useState } from 'react';
import Images from '../../Constants/Images';
import Products from '../../JSON/Products.json'
import ShopBar from './ShopBar';

const Shop = () => {
    const Product = Products.products
    // console.log(Product);


    const [visible, setvisiblety] = useState(false)
    const Tvisible = () => {
        if (!visible) {
            setvisiblety("visible")
        }
    }
    const Fvisible = () => {
        if (visible) {
            setvisiblety("invisible")
        }
    }
    return (
        <main className='w-full flex flex-col items-center'>
            <div className='w-full relative'>
                <img className='w-full h-full' src={Images.banner3} alt="" />
                <div className='w-full h-full bg-[#00000020] flex justify-center items-center text-white text-6xl font-bold uppercase absolute top-0'>Products</div>
            </div>
            <article className='w-3/5 pt-16.5 pb-9.5 flex gap-7.5 text-[#888888] max-sm:w-[80%] max-sm:flex-col-reverse'>
                <ShopBar />

                <section className='w-[900px] flex flex-col gap-y-10 max-sm:w-full max-sm:items-center'>
                    <section className='px-3.5 flex justify-between max-sm:flex-col max-sm:gap-5 max-sm:items-center'>
                        <div className='flex gap-5'>
                            <div className='w-[170px] border h-fit text-sm text-black p-1.5 pl-4'>
                                <label className='' htmlFor="Sort"></label>
                                <select className='' id='Sort' value={`Alphabetically, A-Z`}>
                                    <option value="Featured">Featured</option>
                                    <option value="Best Selling">Best Selling</option>
                                    <option value="Alphabetically, A-Z" >Alphabetically, A-Z</option>
                                    <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                                    <option value="Price, low to high">Price, low to high</option>
                                    <option value="Price, high to low">Price, high to low</option>
                                    <option value="Date, new to old">Date, new to old</option>
                                    <option value="Date, old to new">Date, old to new</option>
                                </select>
                            </div>

                            <div className='w-[170px] border h-fit text-sm text-black p-1.5 pl-4'>
                                <label htmlFor="Pro"></label>
                                <select id='Pro' value={`10`}>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="All">All</option>
                                </select>
                            </div>
                        </div>
                        <span>Showing 1 to 6 of 8 items</span>
                    </section>

                    <section className='flex flex-wrap justify-centfer gap-[18px] max-sm:w-[400px] max-sm:justify-center'>
                        {
                            Product.map((p, i) =>
                                <article key={i} onMouseEnter={Tvisible} onMouseLeave={Fvisible} className='w-[288px] h-fit px-[15px] relative'>
                                    <div className='w-full h-[360px]'><img className='w-full h-full' src={Images[p.img]} alt="" /></div>

                                    {/* motion */}
                                    <div className={`w-[260px] h-[360px] bg-[#00000080] absolute top-0 invisible ${visible} max-sm:w-full`}>
                                        <button className='px-10 py-2.5 text-white bg-black rounded-4xl hover:bg-[#e65540]'>SHOP NOW</button>
                                    </div>

                                    <div className='w-full h-[70px] mt-3 text-[#737373]'>
                                        <a className='w-full text-lg hover:text-[#e65540] transition-colors duration-300' href="#">{p.name}</a> <br />
                                        <span className='w-full text-[16px]'>{p.price}</span>
                                    </div>
                                </article>
                            )
                        }
                    </section>
                </section>
            </article>
        </main>
    );
};

export default Shop;