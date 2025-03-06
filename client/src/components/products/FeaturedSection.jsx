import { ShoppingBag } from 'lucide-react'
import React from 'react'


const FeaturedSection = () => {
    return (
        <section className='py-16 px-4 bg-white'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                {/* Feature 1 */}
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        
                        <i className="fa-regular fa-bag-shopping fa-beat text-2xl"></i>

                    </div>
                    <h4 className='tracking-tighter mb-2 '>
                        FREE INTERNATIONAL SHIPPING
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        On all orders over $100
                    </p>
                </div>

                {/* Feature 2 */}
                
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        
                    <i class="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse text-2xl"></i>

                    </div>
                    <h4 className='tracking-tighter mb-2 '>
                        45 DAYS RETURN
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        Money back gurantee
                    </p>
                </div>


                {/* Feature 3 */}
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                        
                    <i class="fa-regular fa-credit-card fa-beat text-2xl"></i>

                    </div>
                    <h4 className='tracking-tighter mb-2 '>
                        SECURE CHECK OUT
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        100% secured checkout process
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection
