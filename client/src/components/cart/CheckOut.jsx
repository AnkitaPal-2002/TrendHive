import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'sonner'
import PayPalButton from './PayPalButton';
import { PayPalButtons } from '@paypal/react-paypal-js';


const cart = [
    { id: 1, name: "Wireless Headphones", price: 1999, quantity: 2 },
    { id: 2, name: "Smartphone Case", price: 499, quantity: 1 },
    { id: 3, name: "Bluetooth Speaker", price: 2999, quantity: 1 }
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
                                amount={100.00} 
                                onSuccess={handlePaymentSuccess}
                                onError={handlePaymentError}
                                />

                            </div>
                        )
                    }
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default CheckOut
