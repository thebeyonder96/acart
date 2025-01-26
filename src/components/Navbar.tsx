import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [isVisible, setIsvisible] = useState(false);
    const { setShowSearch, getCartCount } =
    useContext(ShopContext) ?? {};

    useEffect(()=>{
        // document.body.classList.add('dark')
    },[])

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            {/* Logo */}
            <Link to="/">
            <img src={assets.logo} alt="" className='w-36' />
            </Link>
            {/* Navigations */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 dark:!text-white'>
                <NavLink to='/' className="flex flex-col gap-1 items-center">
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col gap-1 items-center">
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className="flex flex-col gap-1 items-center">
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col gap-1 items-center">
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            {/* Accessibility */}
            <div className='flex items-center gap-6'>
                <img onClick={()=> setShowSearch && setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group relative'>
                    <Link to={'/login'}><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='hover:text-black cursor-pointer'>Profile</p>
                            <p className='hover:text-black cursor-pointer'>Orders</p>
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-teal-300 text-black aspect-square rounded-full text-[11px]'>{getCartCount ? getCartCount() : 0}</p>
                </Link>
                <img onClick={() => setIsvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>
            {/* Sidebar */}
            <div className={`absolute inset-0 overflow-hidden bg-white transition-all ${isVisible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setIsvisible(false)} className='flex items-center gap-4 p-3'>
                        <p>Back</p>
                        <img src={assets.dropdown_icon} className='h-4' alt="" />
                    </div>
                    <NavLink onClick={()=> setIsvisible(false)} to='/' className="py-3 pl-4 text-xl">
                        <p>Home</p>
                    </NavLink>
                    <NavLink onClick={()=> setIsvisible(false)} to='/collection' className="py-3 pl-4 text-xl">
                        <p>Collection</p>
                    </NavLink>
                    <NavLink onClick={()=> setIsvisible(false)} to='/about' className="py-3 pl-4 text-xl">
                        <p>About</p>
                    </NavLink>
                    <NavLink onClick={()=> setIsvisible(false)} to='/contact' className="py-3 pl-4 text-xl">
                        <p>Contact</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
