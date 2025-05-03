import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'sonner'
import PayPalButton from './PayPalButton';



const cart = [
    { id: 1, name: "Wireless Headphones", price: 1999, quantity: 2, image: "https://picsum.photos/seed/headphones/64" },
    { id: 2, name: "Smartphone Case", price: 499, quantity: 1, image: "https://picsum.photos/seed/case/64" },
    { id: 3, name: "Bluetooth Speaker", price: 2999, quantity: 1, image: "https://picsum.photos/seed/speaker/64" },
    { id: 4, name: "Smartwatch", price: 5999, quantity: 1, image: "https://picsum.photos/seed/smartwatch/64" },
    { id: 5, name: "Laptop Stand", price: 1499, quantity: 1, image: "https://picsum.photos/seed/laptopstand/64" },
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//console.log(`Total Amount: ₹${total}`);

const CheckOut = () => {
    // Your checkout logic here
    const navigate = useNavigate();
    const [checkOutId, setCheckOutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        state:"",
        zipCode:"",
        country:"",
        phone:""
    })

    const handleCreateCheckOut = async (e) => {
        e.preventDefault();
        setCheckOutId(123)
    }

    const handlePaymentError = async (e) => {
        toast.error("Payment Failed");
        console.error(e);
    }

    const handlePaymentSuccess = async (data, details) => {
        toast.success("Payment Successful");
        console.log(data, details);
        navigate('/order-confirmation');
    }


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        {/* Left Section */}
        <div className='bg-white rounded-lg p-6 '>
            <h2 className='text-2xl uppercase mb-6 font-bold'>Checkout</h2>
            <form onSubmit={handleCreateCheckOut}>
                <h3 className='text-lg mb-4'>
                    Contact Details

                </h3>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input 
                    type='email' 
                    value="user@gmail.com"
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500' 
                    placeholder='Enter your email' 
                    disabled
                    />
                </div>
                <h3 className='text-lg mb-4'>Delivery</h3>
                <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-gray-700'>
                            First Name
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.firstName}
                            onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500' 
                            placeholder='Enter your first name'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>
                            Last Name
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.lastName}
                            onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500' 
                            placeholder='Enter your last name'
                            required
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 '>Address</label>
                    <input 
                        type='text' 
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                        required
                    />
                </div>
                <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-gray-700'>
                            City
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>
                            Postal Code
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.zipCode}
                            onChange={(e) => setShippingAddress({...shippingAddress, zipCode: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                            required
                        />
                    </div>    
                </div>
                <div className='mb-4 grid grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-gray-700'>
                            State
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.state}
                            onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700'>
                            Country
                        </label>
                        <input 
                            type='text' 
                            value={shippingAddress.country}
                            onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                            required
                        />
                    </div>    
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 '>Phone</label>
                    <input 
                        type='tel' 
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500'
                        required
                    />
                </div>

                <div className='mt-6'>

                </div>
                <div className='mt-6'>
                    {
                        !checkOutId?
                        (
                            <button 
                            type='submit'
                            className='w-full px-12 py-3 text-sm font-medium tracking-wide text-white bg-slate-950 rounded-md hover:bg-slate-800'>Continue to payment</button>
                        ):
                        (
                            <div>
                                <h3 className='text-lg mb-4'>
                                    Pay with Paypal
                                </h3>
                                {/* Paypal Componenet */}
                                <PayPalButton
                                amount={1000.00} 
                                onSuccess={handlePaymentSuccess}
                                onError={handlePaymentError}
                                />

                            </div>
                        )
                    }
                </div>
            </form>

        </div>
        {/* Right Section */}
        <div className='bg-gray-50 p-6 rounded-lg'>
            <h3 className='text-lg mb-4'>
                    Order Summary
            </h3>
            <div className='border-t py-4 mb-4'>
                {
                    cart.map((product, index) => (
                        <div key={index} className='flex items-start justify-between py-2 border-b'>
                            <div className='flex items-center'>
                                <img src={product.image} alt={product.name} className='w-16 h-16 mr-4' />
                                <div>
                                    <h4 className='text-lg font-semibold'>{product.name}</h4>
                                    <p className='text-gray-600'>₹{product.price}</p>
                                    <p className='text-gray-600'>Qty: {product.quantity}</p>
                                </div>
                            </div>
                            <p className='text-lg font-semibold'>₹{product.price * product.quantity}</p>
                        </div>
                    ))

                }

            </div>
            <div className='flex items-center justify-between py-2 border-b'>
                <h4 className='text-lg font-semibold'>Subtotal</h4>
                <p className='text-lg font-semibold'>₹{total}</p>
            </div>
            <div className='flex items-center justify-between py-2 border-b'>
                <h4 className='text-lg font-semibold'>Shipping</h4>
                <p className='text-lg font-semibold'>Free</p>
            </div>
            <div className='flex items-center justify-between py-2 border-b'>
                <h4 className='text-lg font-semibold'>Total</h4>
                <p className='text-lg font-semibold'>₹{total}</p>
            </div>
        </div>
      
    </div>
  )
}

export default CheckOut
