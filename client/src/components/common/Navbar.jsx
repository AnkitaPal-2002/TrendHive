import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Menu , X} from 'lucide-react';
import SearchBar from './SearchBar';
import CartDrawer from '../cart/CartDrawer';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <nav className="relative z-50 bg-white shadow-md">

                <div className='container mx-auto flex items-center justify-between py-4 px-6'>

                    {/* Left - Logo */}
                    <div>
                        <Link to="/" className="text-2xl font-medium text-black">
                            TrendHive
                        </Link>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className='flex-grow flex justify-center space-x-6'>
                        <Link to="/collections/all" className='text-black hover:text-gray-300 text-sm font-medium uppercase'>
                            Men
                        </Link>
                        <Link to="#" className='text-black hover:text-gray-300 text-sm font-medium uppercase'>
                            Women
                        </Link>
                        <Link to="#" className='text-black hover:text-gray-300 text-sm font-medium uppercase'>
                            Top Wear
                        </Link>
                        <Link to="#" className='text-black hover:text-gray-300 text-sm font-medium uppercase'>
                            Bottom Wear
                        </Link>
                    </div>

                    {/* Right - Icons */}
                    <div className='flex items-center space-x-4'>
                        <Link to="/profile" className='hover: text-black'>
                            <User size={24} strokeWidth={2} />
                        </Link>
                        <button id='cart' onClick={toggleCartDrawer} className='relative hover:text-black'>
                            <ShoppingCart size={24} strokeWidth={2} />


                            <span className="absolute -top-1 -right-2 bg-orange-800 text-white text-xs rounded-full px-1 py-0.5">
                                4
                            </span>
                        </button>
                        {/* Search */}
                        <div className='overflow-hidden '>
                            <SearchBar/>

                        </div>
                        <button id='menu' className='md:hidden ' onClick={toggleNavDrawer}>
                            <Menu size={24} strokeWidth={2} />
                        </button>
                    </div>

                </div>
            </nav>
            <CartDrawer drawarOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

            {/* Mobile Navigation */}
            <div className={`fixed top-0 left-0 w-3/4 md:w-1/3 h-full bg-white shadow-lg transform transition-transform z-50 duration-300 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-end p-4'>
                    <button id="close" onClick={toggleNavDrawer}>
                        <X size={24} strokeWidth={2} className='h-6 w-6 text-gray-600'/>
                    </button>
                </div>
                <div className='p-4 '>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                            Men
                        </Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                            Women
                        </Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                            Top Wear
                        </Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                            Bottom Wear
                        </Link>
                    </nav>
                </div>

            </div>
        </>
    );
}

export default Navbar;
