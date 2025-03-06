import React from 'react'
import featured from "../../assets/featured.webp"
import { Link } from 'react-router-dom'

const FeaturedCollection = () => {
    return (

        <section className='py-16 px-4 lg:px-4'>
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
                {/* Left Content */}
                <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                    <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                        Comfort and style
                    </h2>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6 '>
                        Apparel made for everyday life
                    </h2>
                    <p className='text-lg text-gray-600 mb-6'>
                        Discover high-quality apparel made with care for your skin, comfort, and style.
                    </p>
                    <Link to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700'>
                        Shop Now
                    </Link>
                </div>

                {/* Right Content */}
                <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                    <img src={featured} alt="Featured Collection"
                        className='w-full h-auto object-contain lg:rounded-tr-3xl lg:rounded-br-3xl' />
                </div>
            </div>
        </section>

    )
}

export default FeaturedCollection
