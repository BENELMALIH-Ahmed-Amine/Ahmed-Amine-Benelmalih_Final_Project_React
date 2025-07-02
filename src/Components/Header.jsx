import React from 'react';
import Sosials from './Sosials';

const Header = () => {
    return (
        <header className='w-full py-3 pl-13 pr-10 bg-[#f5f5f5] flex justify-between text-[#888888]'>
            <Sosials/>
            <p className='text-[13px] max-sm:hidden'>Free shipping for standard order over $100 </p>
            <div className='flex gap-x-3 text-[13px]'>
                <p className='max-sm:invisible'>fashe@example.com</p>
                <div>
                    <label htmlFor="cars"></label>
                    <select id='cars' value={`USD`}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GPB">GPB</option>
                        <option value="PKR">PKR</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;