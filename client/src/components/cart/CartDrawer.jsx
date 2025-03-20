import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { X } from "lucide-react";
import CartContents from './CartContents';



const CartDrawer = ({drawarOpen, toggleCartDrawer }) => {
    const navigate = useNavigate();


    const handleCheckOut = () => {
        // Add logic to checkout
        navigate('/checkout');
    }
    
    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:[30rem] h-full bg-white shadow-lg transform flex flex-col z-50 transition-all duration-300 ${ drawarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Close Button */}
            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <X size={24} strokeWidth={2} className='h-6 w-6 text-gray-600'/>
                </button>

            </div>

            {/* Cart contents with scrollable area */}
            <div className='flex-grow p-4 overflow-y-auto'>
                <h2 className='text-xl font-semibold '>Your Cart</h2>
                {/* Component for Cart Contents */}
                <CartContents/>

            </div>

            {/* Checkout button fixed at the bottom */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button 
                className='w-full bg-orange-700 text-white py-3 rounded-lg font-semibold hover:bg-orange-800 transition'
                onClick={handleCheckOut}
                >
                    Checkout
                </button>
                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                    Shipping, taxes, and discount codes calculated at checkout.
                </p>

            </div>

        </div>
    )
}

export default CartDrawer
