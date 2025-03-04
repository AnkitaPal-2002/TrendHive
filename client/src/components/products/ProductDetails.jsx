import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
    const selectedProducts = {
        name: "Stylish Jacket",
        price: 120,
        originalPrice: 150,
        description: "A stylish jacket to keep you warm in the winter.",
        brand: "Fashionista",
        material: "Leather",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown", "Blue"],
        images: [
            { url: "https://picsum.photos/200?random=1", altText: "Stylish Jacket 1" },
            { url: "https://picsum.photos/200?random=2", altText: "Stylish Jacket 2" },
            { url: "https://picsum.photos/200?random=3", altText: "Stylish Jacket 3" },
            { url: "https://picsum.photos/200?random=4", altText: "Stylish Jacket 4" },
        ],
    };

    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    useEffect(() =>{
        if(selectedProducts?.images?.length>0){
            setMainImage(selectedProducts.images[0].url);
        }
    },[]);

    return (
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                {/* Left Thumbnails */}
                <div className={`hidden md:flex flex-col space-y-4 mr-6 `}>
                    {selectedProducts.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={image.altText}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                            onClick={()=>setMainImage(image.url)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img
                            src={mainImage}
                            alt={selectedProducts.images[0].altText}
                            className='w-full h-auto object-cover rounded-lg'
                        />
                    </div>
                </div>

                {/* Mobile Thumbnail */}
                <div className='md:hidden flex space-x-4 overflow-x-scroll mb-4'>
                    {selectedProducts.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={image.altText}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                            onClick={() => setMainImage(image.url)}
                        />
                    ))}
                </div>

                {/* Right Side */}
                <div className='md:w-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                        {selectedProducts.name}
                    </h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>
                        {selectedProducts.originalPrice && `$${selectedProducts.originalPrice}`}
                    </p>
                    <p className='text-xl text-gray-500 mb-2'>
                        ${selectedProducts.price}
                    </p>
                    <p className='text-gray-600 mb-4'>
                        {selectedProducts.description}
                    </p>

                    {/* Color Selection */}
                    <div className='mb-4'>
                        <p className='text-gray-700'>Color:</p>
                        <div className='flex gap-2 mt-2'>
                            {selectedProducts.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border ${selectedColor === color? "border-4 border-black " : "border-gray-300"}`}
                                    style={{
                                        backgroundColor: color.toLowerCase(),
                                        filter: "brightness(0.9)"
                                    }}

                                ></button>
                            ))}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <p className='text-gray-700'>
                            Size:
                        </p>
                        <div className='flex gap-2 mt-2'>
                            {selectedProducts.sizes.map((size) => (
                                <button key={size} className='px-4 py-2 rounded border'>
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='mb-6'>
                        <p className='text-gray-700'>
                            Quantity
                        </p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <button className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                -
                            </button>
                            <span className='text-lg '>1</span>
                            <button className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                +
                            </button>
                        </div>
                    </div>

                    <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">ADD TO CART</button>

                    <div className='mt-10 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>Characteristics</h3>
                        <table className='w-full text-left text-sm text-gray-600'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedProducts.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectedProducts.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
