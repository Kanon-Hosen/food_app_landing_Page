import React from 'react';
import Logo from '../assets/Logo.png'
const Navbar = () => {
    return (
        <div className='md:px-20 flex items-center justify-between h-[156px]'>
            <div>
                <img className='w-[206px]' src={Logo} alt="" />
            </div>
            <ul className='flex items-center gap-[94px] font-semibold'>
                <li className='cursor-pointer  hover:text-[#FA4A0C] transition-colors text-[#FA4A0C]'>Home</li>
                <li className='cursor-pointer text-black hover:text-[#FA4A0C] transition-colors'>Product</li>
                <li className='cursor-pointer text-black hover:text-[#FA4A0C] transition-colors'>Faq</li>
                <li className='cursor-pointer text-black hover:text-[#FA4A0C] transition-colors'>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;